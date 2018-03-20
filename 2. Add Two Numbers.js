/*
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order and each of their nodes contain a single digit.
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
*/
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const addTwoNumbers = (l1, l2) => {
  let sumList = new ListNode(-1)
  let sumNode = sumList
  let node1 = l1
  let node2 = l2
  let x = 0

  while (node1 || node2) {
    let val1 = 0
    let val2 = 0
    if (node1) {
      val1 = node1.val
      node1 = node1.next
    }

    if (node2) {
      val2 = node2.val
      node2 = node2.next
    }

    let val = val1 + val2 + x

    if (val > 9) {
      let str = val.toString()
      x = Number(str[0])
      val = Number(str[1])
    } else {
      x = 0
    }
    sumNode.next = new ListNode(val)
    sumNode = sumNode.next
  }

  if (x) {
    sumNode.next = new ListNode(x)
  }

  return sumList.next
}
