/*
Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
*/

const findDuplicates = a => {
    let res = [];

    for (let i = 0; i < a.length; i++) {
        let index = Math.abs(a[i]) - 1;
        if (a[index] > 0) {
            a[index] *= -1;
        } else {
            res.push(Math.abs(a[i]));
        }
    }
    
    return res;
};