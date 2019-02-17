export function removeIndex(array, index) {
  const length = array.length;
  return [...array.slice(0, index), ...array.slice(index + 1, length)];
}
