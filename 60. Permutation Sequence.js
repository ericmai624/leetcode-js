/*
The set [1,2,3,…,n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order,
We get the following sequence (ie, for n = 3):

"123"
"132"
"213"
"231"
"312"
"321"

Given n and k, return the kth permutation sequence.

Note: Given n will be between 1 and 9 inclusive.
*/

const getPermutation = (n, k) => {
  let factorials = genFactorials()
  let indices = []
  let res = ''

  for (let i = 1; i <= n; i++) {
    factorials[i] = factorials[i - 1] * i
  }

  for (let j = n; j >= 1; j--) {
    let tmp = Math.ceil(k / factorials[j - 1])
    let index = find(tmp, indices)
    k -= (tmp - 1) * factorials[j - 1]
    res += index
  }

  return res
}

const genFactorials = (arr = [1]) => {
  for (let i = 1; i <= 9; i++) {
    arr[i] = arr[i - 1] * i
  }

  return arr
}

const find = (index, indices) => {
  let num = 0

  for (let i = 1; i <= 9; i++) {
    if (!indices[i]) {
      num++
    }
    if (num === index) {
      indices[i] = true
      return i
    }
  }
}

console.log(getPermutation(4, 14))
