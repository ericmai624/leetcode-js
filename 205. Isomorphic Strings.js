/*
Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. 
No two characters may map to the same character but a character may map to itself.

For example,
Given "egg", "add", return true.

Given "foo", "bar", return false.

Given "paper", "title", return true.

Note:
You may assume both s and t have the same length.
*/

const isIsomorphic = (s, t) => {
  const map = {};
  const set = new Set();

  for (let i = 0; i < s.length; i++) {
    const key = s[i];
    const value = t[i];

    if (!map[key] && !set.has(value)) {
      set.add(value);
      map[key] = value;
    }

    if (map[key] !== value) return false;
  }

  return true;
};