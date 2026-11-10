export function historyProgress(seen) {
  const last = seen.lastIndexOf(true);
  return `${Math.round(((last + 1) / seen.length) * 100) || 0}%`;
}
