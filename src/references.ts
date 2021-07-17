import { LinkType, Type } from './types'
import { slugify } from './utils'

export const references = new Map()

const addReference = (ref: string, title: string) => {
  if (references.has(ref)) {
    const current = references.get(ref)
    references.set(ref, current.add(title))
  } else {
    const newSet = new Set()
    references.set(ref, newSet.add(title))
  }
}

export const collectReferences = (children: any, title: string) => {
  for (const child of children) {
    if (child.title?.length > 0) {
      for (const [titleType, titleContent] of child.title) {
        if (
          titleType === Type.Link &&
          (titleContent.url[0] === LinkType.PageRef ||
            titleContent.url[0] === LinkType.Search)
        ) {
          addReference(slugify(titleContent.url[1]), title)
        } else if (
          titleType === Type.Tag &&
          titleContent?.[0]?.[0] === Type.Plain
        ) {
          addReference(slugify(titleContent[0][1]), title)
        } else if (
          titleType === Type.Tag &&
          titleContent?.[0]?.[0] === Type.Link
        ) {
          addReference(slugify(titleContent[0][1].url[1]), title)
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
