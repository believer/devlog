export const removeLinkRef = (text: string) => text.replace(/[\[\]\#]/g, '')
export const isJournal = (title: string) => /^\d{4}-\d{2}-\d{2}$/.test(title)
export const slugify = (input: string) =>
  removeLinkRef(input.trim().toLowerCase().replace(/\s/g, '-'))
