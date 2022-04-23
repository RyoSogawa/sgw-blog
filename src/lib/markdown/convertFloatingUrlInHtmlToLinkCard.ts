import getOgpData from './getOgpData'
import getFloatingUrls from './getFloatingUrls'
import createLinkCard from './linkCard'

const convertFloatingUrlInHtmlToLinkCard = async (html: string) => {
  let convertedHtml = html
  const floatingUrls = getFloatingUrls(html ?? '')
  const ogps = await getOgpData(floatingUrls)

  floatingUrls.forEach(url => {
    const ogpData = ogps.find(ogp => ogp.ogUrl === url)
    const linkCard = createLinkCard(url, ogpData)
    convertedHtml = convertedHtml.replace(`<p>${url}</p>`, linkCard)
  })

  return convertedHtml
}

export default convertFloatingUrlInHtmlToLinkCard
