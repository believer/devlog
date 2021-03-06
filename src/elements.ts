import { Type } from './types'
import { isJournal, removeLinkRef, slugify } from './utils'

export const link = (title: string) => {
  const href = `/${isJournal(title) ? 'journals' : 'pages'}/${slugify(title)}`

  if (title.startsWith('..')) {
    return image(title)
  }

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
  return `<a class="text-indigo-600 dark:text-indigo-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="${link.protocol}://${link.link}" target="_blank" rel="noopener noreferrer">${label}</a>`
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
  const snippet = code
    .replace(/{{/g, '{% raw %}{{')
    .replace(/}}/g, '}}{% endraw %}')

  return `\n\n\`\`\`${language}
${snippet}\`\`\`\n\n`
}

export const tag = (text: any) => {
  if (Array.isArray(text) && text[0][0] === Type.Plain) {
    return `<a class="dark:text-gray-400 text-gray-500" href="/pages/${slugify(
      text[0][1]
    )}">#${removeLinkRef(text[0][1])}</a>`
  } else if (Array.isArray(text) && text[0][0] === Type.Link) {
    return `<a class="dark:text-gray-400 text-gray-500" href="/pages/${slugify(
      text[0][1].url[1]
    )}">#${removeLinkRef(text[0][1].url[1])}</a>`
  }
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
    if (contentType === Type.Plain) {
      text += contentText
    }

    if (contentType === Type.Emphasis && contentText[0][0] === 'Bold') {
      text += boldText(contentText[1][0][1])
    }

    if (contentType === Type.Link && contentText.url[0] === 'Complex') {
      text += externalLink(contentText.url[1], contentText.label[0][1])
    }
  }

  return `<blockquote class="bg-gray-100 border-l-4 border-indigo-600 dark:border-indigo-400 dark:bg-gray-800 p-4">${text}</blockquote>`
}

export const plain = (text: string, child: any): string => {
  const slug = slugify(text)
  const isHeading = child.content.match(/^#+/)

  if (isHeading) {
    const headingType: 1 | 2 | 3 = isHeading[0].length
    const fontSize = {
      1: 'text-2xl',
      2: 'text-xl',
      3: 'text-lg',
    }

    return `<h${headingType} class="${fontSize[headingType]} font-semibold" id="${slug}">${text}</h${headingType}>`
  }

  return text
}
