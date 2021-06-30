import { createFrontmatter } from '../frontmatter'

describe('#createFrontmatter', () => {
  test('should return frontmatter without excerpt', () => {
    expect(createFrontmatter({ slug: 'title', title: 'title', contents: [] }))
      .toEqual(`---
layout: 'page'
slug: 'title'
title: |
  title
tags: 'page'
---
`)
  })

  test('should return frontmatter with excerpt', () => {
    expect(
      createFrontmatter({
        slug: 'title',
        title: 'title',
        contents: ['[[Test]] #Tags <div>Element</div>'],
      })
    ).toEqual(`---
layout: 'page'
slug: 'title'
title: |
  title
tags: 'page'
excerpt: |
  Test  Element
---
`)
  })
})
