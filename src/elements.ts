import { isJournal, removeLinkRef, slugify } from './utils'

export const link = (title: string) => {
  const href = `/${isJournal(title) ? 'journals' : 'pages'}/${slugify(title)}`

  if (title.startsWith('#')) {
    return internalLink(title)
  }

  return `<a class="text-teal-700 dark:text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="${href}"><span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">[[</span>${title}<span class="text-gray-300 dark:text-gray-500 group-hover:text-teal-900">]]</span></a>`
}

export const internalLink = (title: string) => {
  return `<a class="text-indigo-600 dark:text-indigo-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="#${slugify(
    title
  )}">${title.substr(1)}</a>`
}

export const externalLink = (
  link: { protocol: 'http' | 'https'; link: string },
  label: string
) => {
  return `<a class="text-indigo-600 dark:text-indigo-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="${link.protocol}:${link.link}" target="_blank" rel="noopener noreferrer">${label}</a>`
}

export const boldText = (title: string) => {
  return `<strong class="text-rose-600 dark:text-rose-400">${title}</strong>`
}

export const italicText = (title: string) => {
  return `<em>${title}</em>`
}

export const inlineCode = (title: string) => {
  return `<code>${title}</code>`
}

export const code = (code: string, language = '') => {
  return `\`\`\`${language}
${code.replace(/{{/g, '{% raw %}{{').replace(/}}/g, '}}{% endraw %}')}\`\`\``
}

export const tag = (text: string) => {
  return `<a class="dark:text-gray-400 text-gray-500" href="/pages/${slugify(
    text
  )}">#${removeLinkRef(text)}</a>`
}

export const image = (src: string) => {
  return `<img alt="" src="${src.substr(2)}" />`
}

export const warning = (text: string) => {
  return `<div class="text-yellow-700 dark:text-yellow-500">${text}</div>`
}

export const quote = (content: any) => {
  let text = ''

  for (const [contentType, contentText] of content[0][1]) {
    if (contentType === 'Plain') {
      text += contentText
    }

    if (contentType === 'Emphasis' && contentText[0][0] === 'Bold') {
      text += boldText(contentText[1][0][1])
    }

    if (contentType === 'Link' && contentText.url[0] === 'Complex') {
      text += externalLink(contentText.url[1], contentText.label[0][1])
    }
  }

  return `<blockquote class="bg-gray-100 border-l-4 border-indigo-600 dark:border-indigo-400 dark:bg-gray-800 p-4">${text}</blockquote>`
}
