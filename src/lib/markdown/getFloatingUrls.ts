/**
 * @see https://silurus.dev/articles/pO0Neonv8xwbuEnZigMNf
 */
const getFloatingUrls = (md: string): string[] => {
  const regFloatUrl = /(?<=<p>)https?:\/\/[-_.!~*\\'()a-zA-Z0-9;\\/?:\\@&=+\\$,%#]+(?=<\/p>\n)/g;
  const floatUrls = md.match(regFloatUrl);

  return floatUrls ?? [];
};

export default getFloatingUrls;
