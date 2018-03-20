const lengthOfLongestSubstring = str => {
  let repeat = {}
  let max = 0
  let index = 0
  let len = 0

  for (let i = 0; i < str.length; i++) {
    let curr = str[i]
    if (repeat[curr] !== undefined && repeat[curr] >= index) {
      index = repeat[curr] + 1
    }
    repeat[curr] = i
    len = i - index + 1
    max = Math.max(max, len)
  }

  return max
}

const s = 'abcabcbb'
const t = 'bbbbb'
const n = 'pwwkew'
const m = 'dvdf'
const y = 'tmmzuxt'
console.log(lengthOfLongestSubstring(s))
console.log(lengthOfLongestSubstring(t))
console.log(lengthOfLongestSubstring(n))
console.log(lengthOfLongestSubstring(m))
console.log(lengthOfLongestSubstring(y))
