const minPathSum = grid => {
  let res = [];

  for (let row = 0; row < grid.length; row++) {
    res.push([]);
    for (let col = 0; col < grid[0].length; col++) {
      if (row + col === 0) {
        res[row][col] = grid[row][col];
      } else if (row === 0) {
        res[row][col] = res[row][col - 1] + grid[row][col];
      } else if (col === 0) {
        res[row][col] = res[row - 1][col] + grid[row][col];
      } else {
        res[row][col] = Math.min(res[row][col - 1], res[row - 1][col]) + grid[row][col];
      }
    }
  }

  return res[grid.length - 1][grid[0].length - 1];
};