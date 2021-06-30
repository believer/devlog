import { writeFile } from 'fs/promises'
import path from 'path'
import data from '../data.json'
import {
  boldText,
  code,
  externalLink,
  image,
  inlineCode,
  italicText,
  link,
  plain,
  quote,
  tag,
  warning,
} from './elements'
import { createFrontmatter } from './frontmatter'
import { collectReferences, references } from './references'
import { EmphasisType, LinkType, Type } from './types'
import { ensureDirectory, isJournal, slugify } from './utils'

const pagesDirectory = path.join('pages')
const journalsDirectory = path.join('journals')

const createBlock = (level: number) =>
  `<div class="element-block ml-${level * 4}"><div class="flex-1">`

const nodeContent = (child: any, contents: any, level: number): any => {
  if (child.body?.length > 0 && child.body?.[0][0] !== 'Horizontal_Rule') {
    let row = createBlock(level)

    for (const [titleType, titleContent, ...rest] of child.body) {
      if (titleType === Type.Src) {
        row += `${code(titleContent.lines.join(''), titleContent.language)}`
      }

      if (titleType === Type.Custom && titleContent === 'warning') {
        row += warning(rest[2])
      }

      if (titleType === Type.Quote) {
        row += quote(titleContent)
      }

      contents.push(row + '</div></div>')
    }
  }

  if (child.title?.length > 0) {
    let row = createBlock(level)

    for (const [titleType, titleContent] of child.title) {
      if (titleType === Type.Plain) {
        row += plain(titleContent, child)
      }

      if (titleType === Type.Tag) {
        row += tag(titleContent)
      }

      if (titleType === Type.Code) {
        row += inlineCode(
          titleContent.replace(/</g, '&lt;').replace(/>/g, '&gt;')
        )
      }

      if (titleType === Type.Link) {
        const [linkType, url] = titleContent.url

        switch (linkType) {
          case LinkType.Search:
            row += link(url)
            break

          case LinkType.Complex:
            row += externalLink(url, titleContent.label[0][1])
            break

          case LinkType.File:
            row += image(url)
            break
        }
      }

      if (titleType === Type.Emphasis) {
        const emphasisType = titleContent[0][0]
        const text = titleContent[1][0][1]

        switch (emphasisType) {
          case EmphasisType.Bold:
            row += boldText(text)
            break

          case EmphasisType.Italic:
            row += italicText(text)
            break
        }
      }
    }

    contents.push(row + '</div></div>')
  }
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

    nodeContent(child, contents, level)

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

const linkedReferences = (slug: string) => {
  if (!references.has(slug)) {
    return ''
  }

  const linksForPage = [...references.get(slug)]
    .map((title: string) => {
      return `<a class="block bg-gray-100 dark:bg-gray-800 p-4 rounded text-teal-700 dark:text-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 focus:ring-teal-700 dark:focus:ring-teal-400 hover:ring-2 hover:ring-offset-2 dark:hover:ring-offset-gray-900 dark:hover:ring-teal-400 hover:ring-teal-700" href="/${
        isJournal(title) ? 'journals' : 'pages'
      }/${slugify(title)}">${title}</a>`
    })
    .join('\n')

  return `
<section class="mt-8 space-y-2">
<header class="text-gray-500 dark:text-gray-400">Linked references</header>
${linksForPage}
  </section>`
}

const run = async () => {
  // Check that folders exist
  await ensureDirectory(pagesDirectory)
  await ensureDirectory(journalsDirectory)

  // Collect all references and store them in a local Map for later
  for (const { children, ['page-name']: title } of data.blocks) {
    collectReferences(children, title)
  }

  // Render all children
  for (const { id, children, ['page-name']: title } of data.blocks) {
    const slug = slugify(title)

    // Skip pages without content and linked references
    if (
      (children.length === 0 || children[0].content === '') &&
      !references.has(slug)
    ) {
      continue
    }

    const contents = getContent(children)

    const fileContent = `${createFrontmatter({ title, contents })}
<h2 class="text-3xl font-semibold mb-4"><a class="rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/${
      isJournal(title) ? 'journals' : 'pages'
    }/${slugify(title)}">${title}</a></h2>

<div class="space-y-3">
${contents.join('\n\n')}
</div>

${linkedReferences(slug)}
`

    // Write markdown files
    const fileDirectory = isJournal(title) ? journalsDirectory : pagesDirectory
    const filePath = path.join(fileDirectory, `${slug}.md`)

    await writeFile(filePath, fileContent, {
      flag: 'w',
    })
  }
}

run()
