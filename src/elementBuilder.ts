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
import { EmphasisType, LinkType, Type } from './types'

const buildLink = (titleContent: any) => {
  const [linkType, url] = titleContent.url

  switch (linkType) {
    case LinkType.Search:
    case LinkType.PageRef:
      return link(url)

    case LinkType.Complex:
      return externalLink(url, titleContent.label[0][1])

    case LinkType.File:
      return image(url)
  }
}

const buildEmphasis = (titleContent: any) => {
  const emphasisType = titleContent[0][0]
  const text = titleContent[1][0][1]

  switch (emphasisType) {
    case EmphasisType.Bold:
      return boldText(text)

    case EmphasisType.Italic:
      return italicText(text)
  }
}

export const constructChildren = (
  child: any,
  [titleType, titleContent]: [Type, any]
) => {
  switch (titleType) {
    case Type.Plain:
      return plain(titleContent, child)

    case Type.Tag:
      return tag(titleContent)

    case Type.Code:
      return inlineCode(
        titleContent.replace(/</g, '&lt;').replace(/>/g, '&gt;')
      )

    case Type.Link:
      return buildLink(titleContent)

    case Type.Emphasis:
      return buildEmphasis(titleContent)
  }
}

export const constructTitle = ([titleType, titleContent, ...rest]: [
  Type,
  any,
  ...any
]) => {
  switch (titleType) {
    case Type.Src:
      return `${code(titleContent.lines.join(''), titleContent.language)}`
    case Type.Custom:
      if (titleContent === 'warning') {
        return warning(rest[2])
      }
      break
    case Type.Quote:
      return quote(titleContent)
  }
}
