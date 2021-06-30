import { isJournal, removeLinkRef } from './utils'

const addExcerpt = (contents?: Array<string>) => {
  const excerpt =
    contents?.[0]?.replace(/<[^>]*>/g, '').replace(/#\w+/g, '') ?? ''

  return excerpt
    ? `excerpt: |
  ${removeLinkRef(excerpt)}\n`
    : ''
}

const addRow = ([k, v]: [string, string]) => `${k}: '${v}'\n`
const addMutlilineRow = ([k, v]: [string, string]) => `${k}: |
  ${v}\n`

interface FrontmatterProps {
  title: string
  contents?: Array<string>
}

export const createFrontmatter = ({ title, contents }: FrontmatterProps) => {
  let t = {
    layout: 'page',
    title,
    tags: isJournal(title) ? 'journal' : 'page',
  }

  let data = '---\n'

  for (let row of Object.entries(t)) {
    if (row[0] === 'title') {
      data += addMutlilineRow(row)
    } else {
      data += addRow(row)
    }
  }

  data += addExcerpt(contents)
  data += '---\n'

  return data
}
