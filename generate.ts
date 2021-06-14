import data from './data.json'
import fs from 'fs'
import { promisify } from 'util'
import path from 'path'

const writeFile = promisify(fs.writeFile)
const createDirectory = promisify(fs.mkdir)

const pagesDirectory = path.join('pages')
const journalsDirectory = path.join('journals')

export const references = new Map()

const isJournal = (title: string) => {
  return /^\d{4}-\d{2}-\d{2}$/.test(title)
}

const ensureDirectory = async (dir: string) => {
  if (!fs.existsSync(dir)) {
    await createDirectory(dir)
  }
}

const removeLinkRef = (text: string) => {
  return text.replace(/[\[\]\#]/g, '')
}

const slugify = (input: string) => {
  return removeLinkRef(input.trim().toLowerCase().replace(/\s/g, '-'))
}

const createLink = (title: string) => {
  return `<a class="text-teal-400 group" href="/${
    isJournal(title) ? 'journals' : 'pages'
  }/${slugify(
    title
  )}"><span class="text-gray-500 group-hover:text-teal-500">[[</span>${title}<span class="text-gray-500 group-hover:text-teal-500">]]</span></a>`
}

const createExternalLink = (
  link: { protocol: 'http' | 'https'; link: string },
  label: string
) => {
  return `<a class="text-indigo-400" href="${link.protocol}:${link.link}" target="_blank" rel="noopener noreferrer">${label}</a>`
}

const createBoldText = (title: string) => {
  return `<strong class="text-rose-400">${title}</strong>`
}

const createItalicText = (title: string) => {
  return `<em>${title}</em>`
}

const createInlineCode = (title: string) => {
  return `<code>${title}</code>`
}

const createCodeText = (code: string, language = '') => {
  return `\`\`\`${language}
${code}\`\`\``
}

const createTag = (text: string) => {
  return `<a class="text-gray-400" href="/pages/${slugify(
    text
  )}">#${removeLinkRef(text)}</a>`
}

const createImage = (src: string) => {
  return `<img alt="" src="${src.substr(2)}" />`
}

const createWarning = (text: string) => {
  return `<div class="text-yellow-500">${text}</div>`
}

export const getContent = (
  children: any,
  contents: any = [],
  level = 0
): any => {
  for (const child of children) {
    if (child.properties?.public) {
      continue
    }

    if (child.body?.length > 0 && child.body?.[0][0] !== 'Horizontal_Rule') {
      let row = `<div class="element-block ml-${
        level * 4
      }"><div class="flex-1">`

      for (const [titleType, titleContent, ...rest] of child.body) {
        if (titleType === 'Src') {
          row += `\n\n${createCodeText(
            titleContent.lines.join(''),
            titleContent.language
          )}\n\n`
        }

        if (titleType === 'Custom' && titleContent === 'warning') {
          row += createWarning(rest[2])
        }

        contents.push(row + '</div></div>')
      }
    }

    if (child.title?.length > 0) {
      let row = `<div class="element-block ml-${
        level * 4
      }"><div class="flex-1">`

      for (const [titleType, titleContent] of child.title) {
        if (titleType === 'Plain') {
          row += titleContent
        }

        if (titleType === 'Tag') {
          row += createTag(titleContent)
        }

        if (titleType === 'Code') {
          row += createInlineCode(titleContent)
        }

        if (titleType === 'Link' && titleContent.url[0] === 'Search') {
          row += createLink(titleContent.url[1])
        }

        if (titleType === 'Link' && titleContent.url[0] === 'Complex') {
          row += createExternalLink(
            titleContent.url[1],
            titleContent.label[0][1]
          )
        }

        if (titleType === 'Link' && titleContent.url[0] === 'File') {
          row += createImage(titleContent.url[1])
        }

        if (titleType === 'Emphasis' && titleContent[0][0] === 'Bold') {
          row += createBoldText(titleContent[1][0][1])
        }

        if (titleType === 'Emphasis' && titleContent[0][0] === 'Italic') {
          row += createItalicText(titleContent[1][0][1])
        }
      }

      contents.push(row + '</div></div>')
    }

    if (child.body?.[0]?.[0] === 'Horizontal_Rule') {
      contents.push('<hr class="border-gray-700 !my-5" />')
    }

    if (child.children.length > 0) {
      contents.push(getContent(child.children, contents, level + 1))
    } else {
      continue
    }
  }

  return contents
}

export const collectReferences = (children: any, title: string) => {
  for (const child of children) {
    if (child.title?.length > 0) {
      for (const [titleType, titleContent] of child.title) {
        if (titleType === 'Link' && titleContent.url[0] === 'Search') {
          const slugTitle = slugify(titleContent.url[1])

          if (references.has(slugTitle)) {
            const current = references.get(slugTitle)
            references.set(slugTitle, current.add(title))
          } else {
            const newSet = new Set()
            references.set(slugTitle, newSet.add(title))
          }
        }
      }

      if (child.children.length > 0) {
        collectReferences(child.children, title)
      } else {
        continue
      }
    }
  }
}

const run = async () => {
  await ensureDirectory(pagesDirectory)
  await ensureDirectory(journalsDirectory)

  for (const { children, ['page-name']: title } of data.blocks) {
    collectReferences(children, title)
  }

  for (const { id, children, ['page-name']: title } of data.blocks) {
    const contents = getContent(children)
    const slug = slugify(title)

    if (
      (children.length === 0 || children[0].content === '') &&
      !references.get(slug)
    ) {
      continue
    }

    const excerpt =
      contents?.[0]?.replace(/<[^>]*>/g, '').replace(/#\w+/g, '') ?? ''

    const frontmatter = `---
layout: page
id: '${id}'
title: '${title}'
tags: ${isJournal(title) ? 'journal' : 'page'}
${
  excerpt
    ? `excerpt: |
  ${excerpt}
`
    : ''
}
---
  `

    const fileContent = `${frontmatter}
<h2 class="text-3xl font-semibold mb-4"><a href="/${
      isJournal(title) ? 'journals' : 'pages'
    }/${slugify(title)}">${title}</a></h2>

<div class="space-y-3">
${contents.join('\n\n')}
</div>


${
  references.has(slug)
    ? `
<section class="mt-8 space-y-2">
<header class="text-gray-400">Linked references</header>
${([...references.get(slug)] ?? [])
  .map((title: string) => {
    return `<a class="block bg-gray-800 p-4 rounded text-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-teal-400 hover:ring-2 hover:ring-offset-2 hover:ring-offset-gray-900 hover:ring-teal-400" href="/${
      isJournal(title) ? 'journals' : 'pages'
    }/${slugify(title)}">${title}</a>`
  })
  .join('\n')}
  </section>`
    : ''
}
`

    await writeFile(
      path.join(
        isJournal(title) ? journalsDirectory : pagesDirectory,
        `${slug}.md`
      ),
      fileContent,
      {
        flag: 'w',
      }
    )
  }
}

run()
