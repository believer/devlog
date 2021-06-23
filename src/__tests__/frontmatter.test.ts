import { createFrontmatter } from '../frontmatter'

describe('#createFrontmatter', () => {
  test('should return frontmatter without excerpt', () => {
    expect(createFrontmatter({ id: '1', title: 'title', contents: [] }))
      .toEqual(`---
layout: 'page'
id: '1'
title: |
  title
tags: 'page'
---
`)
  })

  test('should return frontmatter with excerpt', () => {
    expect(
      createFrontmatter({
        id: '1',
        title: 'title',
        contents: ['[[Test]] #Tags <div>Element</div>'],
      })
    ).toEqual(`---
layout: 'page'
id: '1'
title: |
  title
tags: 'page'
excerpt: |
  Test  Element
---
`)
  })
})
