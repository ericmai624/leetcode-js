/**
 * @param {number[][]} triangle
 * @return {number}
 */

const minimumTotal = triangle => {
  let min = Infinity;

  const findPath = (triangle, currSum, index, lastPos) => {
    if (index === triangle.length) {
      min = Math.min(min, currSum);
      return;
    }

    let start = lastPos;
    let end = lastPos + 1;
    if (lastPos >= 1) { start--; }

    for (let i = start; i <= end; i++) {
      console.log('row: ', index, 'position: ', i, 'value: ', triangle[index][i]);
      findPath(triangle, currSum + triangle[index][i], index + 1, i);
    }
  };

  findPath(triangle, 0, 0, 0);

  return min;
};

const s = [
     [2],
   [3, 4],
  [6, 5, 7],
[4, 1, 8, 3]
];

console.log(minimumTotal(s));
