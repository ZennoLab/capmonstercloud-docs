export function uniqBy<T, K extends keyof T>(array: T[], keyOrFn: ((item: T) => any) | K): T[] {
  const keyFn = typeof keyOrFn === 'function' ? keyOrFn : (item: T) => item[keyOrFn];

  const seen = new Set<any>();
  return array.filter(item => {
    const key = keyFn(item);
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}
