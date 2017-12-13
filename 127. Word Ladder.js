/*
Given two words (beginWord and endWord), and a dictionary's word list, 
find the length of shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time.
Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
For example,

Given:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log","cog"]
As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.

Note:
Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.
UPDATE (2017/1/20):
The wordList parameter had been changed to a list of strings (instead of a set of strings). 
Please reload the code definition to get the latest changes.
*/
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
**/

const ladderLength = (beginWord, endWord, wordList) => {
  var queue = [];
  var set = new Set();
  var level = 1;
  var letters = 'abcdefghijklmnopqrstuvyxwz';

  queue.push(beginWord);
  set.add(beginWord);

  while (queue.length) {
    var len = queue.length;

    for (var x = 0; x < len; x++) {
      var word = queue.shift();

      for (var i = 0; i < word.length; i++) {
        for (var j = 0; j < letters.length; j++) {
          var transformed = word.substring(0, i) + letters[j] + word.substring(i + 1);

          if (wordList.indexOf(transformed) !== -1) {
            if (transformed === endWord) {
              return level + 1;
            } else if (!set.has(transformed)) {
              queue.push(transformed);
              set.add(transformed);
            }
          }
        }
      }
    }
    level++;
  }

  return 0;
};