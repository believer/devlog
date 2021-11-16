import { plain } from '../elements'

describe('#plain', () => {
  test('handles heading 1', () => {
    const child = {
      content: '# test',
    }

    expect(plain('test', child)).toEqual(
      '<h1 class="text-2xl font-semibold" id="test">test</h1>'
    )
  })

  test('handles heading 2', () => {
    const child = {
      content: '## test',
    }

    expect(plain('test', child)).toEqual(
      '<h2 class="text-xl font-semibold" id="test">test</h2>'
    )
  })

  test('handles heading 3', () => {
    const child = {
      content: '### test',
    }

    expect(plain('test', child)).toEqual(
      '<h3 class="text-lg font-semibold" id="test">test</h3>'
    )
  })

  test('handles plain text', () => {
    const child = {
      content: 'test',
    }

    expect(plain('test', child)).toEqual('test')
  })
})
