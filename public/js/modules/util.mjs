
export function easyHash(text) {
  let hash = 0;
  let chr;

  for(let i = 0; i < text.length; i++) {
    chr   = text.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }

  return hash;
};
