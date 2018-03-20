/*
Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

    The length of both num1 and num2 is < 5100.
    Both num1 and num2 contains only digits 0-9.
    Both num1 and num2 does not contain any leading zero.
    You must not use any built-in BigInteger library or convert the inputs to integer directly.

*/

const addStrings = (num1, num2) => {
  let carry = 0
  let total = ''
  let p1 = num1.length - 1
  let p2 = num2.length - 1

  while (p1 >= 0 || p2 >= 0) {
    let d1 = p1 > -1 ? parseInt(num1[p1], 10) : 0
    let d2 = p2 > -1 ? parseInt(num2[p2], 10) : 0
    let sum = d1 + d2 + carry

    if (sum > 9) {
      carry = 1
      sum %= 10
    } else {
      carry = 0
    }

    total = sum + total
    p1--
    p2--
  }

  if (carry) {
    total = carry + total
  }

  return total
}

let a = '12313'
let b = '2312322'

console.log(addStrings(a, b))
