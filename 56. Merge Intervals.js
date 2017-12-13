/*
Given a collection of intervals, merge all overlapping intervals.

For example,
Given [1,3],[2,6],[8,10],[15,18],
return [1,6],[8,10],[15,18].
*/

const merge = intervals => {
  let res = [];

  intervals.sort((a, b) => (a.start < b.start ? 1 : -1));
  console.log(intervals);

  if (intervals.length) {
    res.push(intervals[0]);
  }

  for (let i = 1; i < intervals.length; i++) {
    let interval = intervals[i];
    let last = res.pop();

    if (interval.start > last.end) {
      res.push(last);
      res.push(interval);
    } else {
      last.end = Math.max(last.end, interval.end);
      res.push(last);
    }
  }

  return res;
};

const s = [[1, 3], [2, 6], [8, 10], [15, 18]];

console.log(merge(s));