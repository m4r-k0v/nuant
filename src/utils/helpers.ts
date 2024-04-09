/**
 * Extracts the index from a URL.
 * example: https://pokeapi.co/api/v2/pokemon/1 -> 1
 * @param url
 */
export const extractIndexFromUrl = (url: string): string | null => {
  try {
    const parsedUrl = new URL(url);
    const parts = parsedUrl.pathname.split('/').filter((part) => part !== '');
    return parts.length > 0 ? parts[parts.length - 1] : null;
  } catch (error) {
    console.error('Error parsing URL:', error);
    return null;
  }
};
