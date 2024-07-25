export default function add(numbers: string): number {
  if (numbers.length === 0) return 0

  let customDelimiter, delimitersRegex
  if (numbers.startsWith('//')) {
    customDelimiter = numbers[2]
  }
  if (customDelimiter) {
    delimitersRegex = new RegExp(`${customDelimiter}|\n`)
    numbers = numbers.slice(4)
  }
  else {
    delimitersRegex = /,|\n/
  }
  const numbersToSum = numbers.split(delimitersRegex).map(Number)

  const negativeNumbers = numbersToSum.filter(num => num < 0)

  if (negativeNumbers.length > 0) {
    throw new Error(`negative numbers not allowed: ${negativeNumbers.join(",")}`)
  }

  return numbersToSum.reduce((acc, num) => acc + num)
}
