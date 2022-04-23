import { sanitizeUrl } from '@braintree/sanitize-url'
import getDomainFromUrl from './getDomainFromUrl'
import type { OgpData } from './getOgpData'

const createLinkCard = (href: string, ogpData?: OgpData | null) => {
  const sanitizedUrl = sanitizeUrl(href ?? undefined)

  if (!ogpData || !ogpData.ogUrl) {
    return `
      <a href="${sanitizedUrl}" target="_blanck" rel="noreferrer noopener">${href}</a>`
  }

  const { ogImage, ogUrl, ogTitle, ogDescription } = ogpData
  const image = Array.isArray(ogImage) ? ogImage[0] : ogImage
  const imageWidth = image?.width ?? 1200
  const imageHeight = image?.height ?? 630

  const showsDesc =
    !!ogDescription &&
    ogDescription.length > 0 &&
    ogDescription.trim() !== 'undefined'

  const domain = getDomainFromUrl(ogUrl)
  const faviconSrc = `https://www.google.com/s2/u/0/favicons?domain=${domain}`

  return `
    <div class="not-prose my-12">
      <a class="block bg-darkBlue rounded overflow-hidden" 
        href="${ogUrl}" target="_blanck" rel="noreferrer noopener">
        <article class="flex">
          <div class="flex flex-col justify-evenly p-3 grow sm:px-6 md:py-4">
            <h1 class="line-clamp-2 leading-snug fsz-15ptr md:fsz-16ptr text-white">${ogTitle}</h1>
            ${
              showsDesc
                ? `<p class="line-clamp-1 fsz-12ptr md:fsz-13ptr mt-2">${ogDescription}</p>`
                : ''
            }
            <footer class="flex items-center mt-2 md:mt-3">
              <img class="w-4 h-4 mr-2" src="${faviconSrc}" alt="${domain}" 
                loading="lazy" width="16" height="16" />
              <div class="fsz-12ptr font-mono">${domain}</div>
            </footer>
          </div>
          <div class="max-w-[35%] w-60 shrink-0">
            <img class="h-full object-cover" src="${image?.url}" alt=""
              width="${imageWidth}" height="${imageHeight}" loading="lazy" />
          </div>
        </article>
      </a>
    </div>`
}

export default createLinkCard
