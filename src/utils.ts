import { constants } from 'fs'
import { access, mkdir } from 'fs/promises'

export const removeLinkRef = (text: string) => text.replace(/[\[\]\#]/g, '')

export const isJournal = (title: string) => /^\d{4}-\d{2}-\d{2}$/.test(title)

const clean = (input: string) => input.replace(/['"]/g, '').replace(/\s/g, '-')

export const slugify = (input: string) =>
  clean(removeLinkRef(input.trim().toLowerCase()))

export const ensureDirectory = async (dir: string) => {
  try {
    await access(dir, constants.R_OK)
  } catch {
    await mkdir(dir)
  }
}
