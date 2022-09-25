export const htmlToDesc = (html: string): string => {
  const content = html.replace(/(<([^>]+)>)/gi, '');
  const contentWithoutReturn = content.replace(/\r?\n|\r/g, '');
  return `${contentWithoutReturn.substring(0, 200)}...`;
};

export function getFaviconSrcFromOrigin(hostname: string) {
  return `https://www.google.com/s2/favicons?sz=32&domain_url=${hostname}`;
}
