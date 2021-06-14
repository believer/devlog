import { isJournal, removeLinkRef, slugify } from './utils'

export const link = (title: string) => {
  const href = `/${isJournal(title) ? 'journals' : 'pages'}/${slugify(title)}`

  return `<a class="text-teal-400 rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-pink-400" href="${href}"><span class="text-gray-500 group-hover:text-teal-900">[[</span>${title}<span class="text-gray-500 group-hover:text-teal-900">]]</span></a>`
}

export const externalLink = (
  link: { protocol: 'http' | 'https'; link: string },
  label: string
) => {
  return `<a class="text-indigo-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-pink-400" href="${link.protocol}:${link.link}" target="_blank" rel="noopener noreferrer">${label}</a>`
}

export const boldText = (title: string) => {
  return `<strong class="text-rose-400">${title}</strong>`
}

export const italicText = (title: string) => {
  return `<em>${title}</em>`
}

export const inlineCode = (title: string) => {
  return `<code>${title}</code>`
}

export const code = (code: string, language = '') => {
  return `\`\`\`${language}
${code}\`\`\``
}

export const tag = (text: string) => {
  return `<a class="text-gray-400" href="/pages/${slugify(
    text
  )}">#${removeLinkRef(text)}</a>`
}

export const image = (src: string) => {
  return `<img alt="" src="${src.substr(2)}" />`
}

export const warning = (text: string) => {
  return `<div class="text-yellow-500">${text}</div>`
}
