import { slugify } from '../utils'

describe('#slugify', () => {
  test('removes any linked references', () => {
    expect(slugify('[[test]]')).toEqual('test')
  })

  test('removes any tags', () => {
    expect(slugify('#[[test]]')).toEqual('test')
    expect(slugify('#test')).toEqual('test')
  })

  test('sets the slug to lower case', () => {
    expect(slugify('TEsT')).toEqual('test')
  })

  test('replaces spaces with hyphens', () => {
    expect(slugify('test test test')).toEqual('test-test-test')
  })

  test('removes quotation marks', () => {
    expect(slugify("don't do this")).toEqual('dont-do-this')
    expect(slugify('dont "do" this')).toEqual('dont-do-this')
  })
})
