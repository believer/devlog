import data from './data.json'
import fs from 'fs'
import { promisify } from 'util'
import path from 'path'

const writeFile = promisify(fs.writeFile)
const createDirectory = promisify(fs.mkdir)

const pagesDirectory = path.join('pages')
const journalsDirectory = path.join('journals')

const ensureDirectory = async (dir: string) => {
  if (!fs.existsSync(dir)) {
    await createDirectory(dir)
  }
}

const removeLinkRef = (text: string) => {
  return text.replace(/[\[\]\#]/g, '')
}

const slugify = (input: string) => {
  return removeLinkRef(input.toLowerCase().replace(/\s/g, '-'))
}

const createLink = (title: string) => {
  return `<a class="text-teal-400 group" href="/pages/${slugify(
    title
  )}"><span class="text-gray-500 group-hover:text-yellow-500">[[</span>${title}<span class="text-gray-500 group-hover:text-yellow-500">]]</span></a>`
}

const createExternalLink = (
  link: { protocol: 'http' | 'https'; link: string },
  label: string
) => {
  return `<a class="text-indigo-400" href="${link.protocol}:${link.link}" target="_blank" rel="">${label}</a>`
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

      for (const [i, [titleType, titleContent]] of child.body.entries()) {
        if (titleType === 'Src') {
          row += `\n\n${createCodeText(
            titleContent.lines.join(''),
            titleContent.language
          )}\n\n`
        }

        contents.push(row + '</div></div>')
      }
    }

    if (child.title?.length > 0) {
      let row = `<div class="element-block ml-${
        level * 4
      }"><div class="flex-1">`

      for (const [i, [titleType, titleContent]] of child.title.entries()) {
        if (titleType === 'Plain') {
          row += `${titleContent}`
        }

        if (titleType === 'Tag') {
          row += `${createTag(titleContent)}`
        }

        if (titleType === 'Code') {
          row += `${createInlineCode(titleContent)}`
        }

        if (titleType === 'Link' && titleContent.url[0] === 'Search') {
          row += `${createLink(titleContent.url[1])}`
        }

        if (titleType === 'Link' && titleContent.url[0] === 'Complex') {
          row += `${createExternalLink(
            titleContent.url[1],
            titleContent.label[0][1]
          )}`
        }

        if (titleType === 'Link' && titleContent.url[0] === 'File') {
          row += `${createImage(titleContent.url[1])}`
        }

        if (titleType === 'Emphasis' && titleContent[0][0] === 'Bold') {
          row += `${createBoldText(titleContent[1][0][1])}`
        }

        if (titleType === 'Emphasis' && titleContent[0][0] === 'Italic') {
          row += `${createItalicText(titleContent[1][0][1])}`
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

const run = async () => {
  await ensureDirectory(pagesDirectory)
  await ensureDirectory(journalsDirectory)

  for (const block of data.blocks) {
    if (block.children.length === 0 || block.children[0].content === '') {
      continue
    }

    const title = block['page-name']
    const isJournal = /^\d{4}-\d{2}-\d{2}$/.test(title)

    const frontmatter = `---
layout: page
id: '${block.id}'
title: '${title}'
tags: ${isJournal ? 'journal' : 'page'}
---
  `

    const contents = getContent(block.children, [])

    const fileContent = `${frontmatter}
${!isJournal ? `# ${title}\n` : ''}
<div class="space-y-2">
${contents.join('\n\n')}
</div>
`

    const slug = slugify(title)

    await writeFile(
      path.join(isJournal ? journalsDirectory : pagesDirectory, `${slug}.md`),
      fileContent,
      {
        flag: 'w',
      }
    )
  }
}

run()
