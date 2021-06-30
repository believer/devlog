import { createFrontmatter } from '../frontmatter'

describe('#createFrontmatter', () => {
  test('should return frontmatter without excerpt', () => {
    expect(createFrontmatter({ title: 'title', contents: [] })).toEqual(`---
layout: 'page'
title: |
  title
tags: 'page'
---
`)
  })

  test('should return frontmatter with excerpt', () => {
    expect(
      createFrontmatter({
        title: 'title',
        contents: ['[[Test]] #Tags <div>Element</div>'],
      })
    ).toEqual(`---
layout: 'page'
title: |
  title
tags: 'page'
excerpt: |
  Test  Element
---
`)
  })
})
