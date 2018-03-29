/*
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, 
determine if s can be segmented into a space-separated sequence of one or more dictionary words. 
You may assume the dictionary does not contain duplicate words.

For example, given
s = "leetcode",
dict = ["leet", "code"].

Return true because "leetcode" can be segmented as "leet code".

UPDATE (2017/1/4):
The wordDict parameter had been changed to a list of strings (instead of a set of strings). Please reload the code definition to get the latest changes.
*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// Solution reference: https://www.geeksforgeeks.org/dynamic-programming-set-32-word-break-problem/

const wordBreak = (s, wordDict) => {
  let size = s.length;
  let dp = Array(size).fill(false);
  
  for (let i = 1; i <= size; i++) {
      if (!dp[i] && wordDict.includes(s.substr(0, i))) {
          dp[i] = true;
      }
      
      if (dp[i]) {
          if (i === size) {
              return true;
          }
          
          for (let j = i + 1; j <= size; j++) {
              if (!dp[j] && wordDict.includes(s.substr(i, j - i))) {
                  dp[j] = true;
              }
              
              if (j === size && dp[j]) {
                  return true;
              }
          }
      }
  }
  
  return false;
};