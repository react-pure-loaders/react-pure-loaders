export default function delay(interval: string, count: number, index: number) {
  return `${((index * parseFloat(interval)) - (parseFloat(interval) * count)).toFixed(2)}s`;
}
