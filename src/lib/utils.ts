export const htmlToDesc = (html: string): string => {
  const content = html.replace(/(<([^>]+)>)/gi, '')
  const contentWithoutReturn = content.replace(/\r?\n|\r/g, '')
  return contentWithoutReturn.substring(0, 200)
}
