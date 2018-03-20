/*
Given a string s, find the longest palindromic substring in s.
You may assume that the maximum length of s is 1000.

Example:

Input: "babad"

Output: "bab"

Note: "aba" is also a valid answer.
Example:

Input: "cbbd"

Output: "bb"
*/

const longestPalindrome = s => {
  let res = ''
  let len = 2 * s.length - 1
  let left, right

  for (let i = 0; i < len; i++) {
    left = right = parseInt(i / 2)
    if (i % 2 !== 0) {
      right++
    }
    let substring = expandFromCenter(s, left, right)
    if (substring.length > res.length) {
      res = substring
    }
  }

  return res
}

const expandFromCenter = (s, left, right) => {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--
    right++
  }

  return s.substring(left + 1, right)
}

console.log(longestPalindrome('ccc'))
