import { writeFile } from 'fs/promises'
import path from 'path'
import data from '../data.json'
import { constructChildren, constructTitle } from './elementBuilder'
import { link } from './elements'
import { createFrontmatter } from './frontmatter'
import { collectReferences, references } from './references'
import { Type } from './types'
import { ensureDirectory, isJournal, slugify } from './utils'

const pagesDirectory = path.join('pages')
const journalsDirectory = path.join('journals')

const nodeContent = (child: any, contents: any, level: number): any => {
  let rowContent = ''

  if (child.properties && Object.keys(child.properties).length > 0) {
    if (child.properties.tags) {
      rowContent += '<strong>tags:</strong> '
      rowContent += child.properties.tags
        .map((tag: any) => link(tag))
        .join(', ')
      rowContent += '\n\n'
    }

    if (child.properties.pid) {
      rowContent += `<strong>pid:</strong> ${child.properties.pid}`
    }

    if (rowContent !== '') {
      return contents.push(
        `<div class="element-block"><div class="bg-gray-800 py-2 px-4 flex-1 rounded-sm">${rowContent}</div></div>`
      )
    }
  }

  if (child.body?.length > 0 && child.body?.[0][0] !== 'Horizontal_Rule') {
    for (const childData of child.body) {
      rowContent += constructTitle(childData)
    }
  }

  if (child.title?.length > 0) {
    for (const childData of child.title) {
      rowContent += constructChildren(child, childData)
    }
  }

  if (rowContent !== '') {
    contents.push(
      `<div class="element-block ml-${
        level * 4
      }"><div class="flex-1">${rowContent}</div></div>`
    )
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

    // Remove any Tweet embeds
    if (child.title?.[0]?.[0] === Type.Macro) {
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
    .sort((a, b) => a.localeCompare(b))
    .map((title: string) => {
      return `<a class="block bg-gray-100 dark:bg-gray-700 p-4 rounded text-teal-700 dark:text-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 focus:ring-teal-700 dark:focus:ring-teal-400 hover:ring-2 hover:ring-offset-2 dark:hover:ring-offset-gray-900 dark:hover:ring-teal-400 hover:ring-teal-700" href="/${
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
  for (const { children, ['page-name']: title } of data.blocks) {
    const slug = slugify(title)

    // Skip pages without content and linked references
    if (
      (children.length === 0 || children[0].content === '') &&
      !references.has(slug)
    ) {
      continue
    }

    const contents = getContent(children)

    const heading = `<h2 class="text-3xl font-semibold mb-4"><a class="rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:focus:ring-pink-400 focus:ring-pink-700" href="/${
      isJournal(title) ? 'journals' : 'pages'
    }/${slugify(title)}">${title}</a></h2>`

    const fileContent = `${createFrontmatter({ title, slug, contents })}
${heading}

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
