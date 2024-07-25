export default function add(numbers: string): number {
  if (numbers.length === 0) return 0
  const numbersToSum = numbers.split(',').map(Number)

  return numbersToSum.reduce((acc, num) => acc + num)
}
