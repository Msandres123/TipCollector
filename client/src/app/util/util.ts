export function currencyFormat(amount: number) {
    return '$' + (amount/100).toFixed(2)
  }

export function dateFormat(str: string) {
  let strArr = str.split("-")

  return `${strArr[1]}/${strArr[2]}/${strArr[0]}`
}