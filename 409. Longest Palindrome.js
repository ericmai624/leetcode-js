/*
Given a string which consists of lowercase or uppercase letters, 
find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:

Input:
"abccccdd"

Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
*/

const longestPalindrome = s => {
    let res = 0;
    let count = {};

    for (let i = 0; i < s.length; i++) {
        count[s[i]] ? count[s[i]]++ : count[s[i]] = 1;
    }

    for (let x in count) {
        let freq = count[x];
        res += Math.floor(freq / 2) * 2;
        if (res % 2 === 0 && freq % 2 === 1) {
           res++;
        }
    }

    return res;
};
