export const removeLinkRef = (text: string) => text.replace(/[\[\]\#]/g, '')
export const isJournal = (title: string) => /^\d{4}-\d{2}-\d{2}$/.test(title)
const clean = (input: string) => input.replace(/['"]/g, '').replace(/\s/g, '-')

export const slugify = (input: string) =>
  clean(removeLinkRef(input.trim().toLowerCase()))
