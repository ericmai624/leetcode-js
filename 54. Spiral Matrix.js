/*
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

For example,
Given the following matrix:

[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
You should return [1,2,3,6,9,8,7,4,5].
*/

const spiralOrder = matrix => {
  let res = [];
  let rows = matrix.length;
  let cols = matrix[0].length;
  let r = c = 0;

  if (!matrix || !rows || !cols) {
    return res;
  }

  while (rows > 0 && cols > 0) {
    if (rows === 1) {
      for (let i = 0; i < cols; i++) {
        res.push(matrix[r][c++]);
      }
      break;
    } else if (cols === 1) {
      for (let i = 0; i < rows; i++) {
        res.push(matrix[r++][c]);
      }
      break;
    }

    for (let i = 0; i < cols - 1; i++) {
      res.push(matrix[r][c++]);
    }

    for (let i = 0; i < rows - 1; i++) {
      res.push(matrix[r++][c]);
    }
    
    for (let i = 0; i < cols - 1; i++) {
      res.push(matrix[r][c--]);
    }
    
    for (let i = 0; i < rows - 1; i++) {
      res.push(matrix[r--][c]);
    }


    r++;
    c++;
    rows -= 2;
    cols -= 2;
  }

  return res;
};

let matrix = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
];

console.log(spiralOrder(matrix));