/**
 * @see https://silurus.dev/articles/pO0Neonv8xwbuEnZigMNf
 */
const getDomainFromUrl = (url: string | undefined): string | undefined => {
  if (!url) return undefined;
  let result;
  let match;
  match = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n?=]+)/im);
  if (match && match.length > 1) {
    [, result] = match;
    match = result.match(/^[^.]+\.(.+\..+)$/);
    if (match && match.length > 1) {
      [, result] = match;
    }
  }
  return result;
};

export default getDomainFromUrl;
