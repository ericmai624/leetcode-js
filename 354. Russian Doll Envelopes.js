const maxEnvelopes = envelopes => {
  let res = 0
  let sorted = envelopes.sort((a, b) => a[0] - b[0])

  const dfs = (arr, curr, num, index) => {
    let fit = false

    for (let i = index; i < arr.length; i++) {
      let next = arr[i]
      if (curr[0] < next[0] && curr[1] < next[1]) {
        fit = true
        dfs(arr, next, num + 1, index + 1)
      }
    }

    if (!fit) {
      res = Math.max(res, num)
    }
  }

  dfs(sorted, [0, 0], 0, 0)

  return res
}

const s = [[5, 4], [6, 4], [6, 7], [2, 3]]
const n = [[2, 100], [3, 200], [4, 300], [5, 500], [5, 400], [5, 250], [6, 370], [6, 360], [7, 380]]

console.log(maxEnvelopes(s))
console.log(maxEnvelopes(n))
