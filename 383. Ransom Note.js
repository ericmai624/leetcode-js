/*
Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
*/

const canConstruct = (ransomNote, magazine) => {
  let res = true
  let map = {}

  for (let i = 0; i < magazine.length; i++) {
    let key = magazine[i]
    map[key] ? map[key]++ : map[key] = 1
  }

  for (let j = 0; j < ransomNote.length; j++) {
    let char = ransomNote[j]
    if (!map[char]) {
      res = false
      break
    }
    map[char]--
  }

  return res
}

console.log(canConstruct('a', 'b'))
console.log(canConstruct('aa', 'ab'))
console.log(canConstruct('aa', 'aab'))
