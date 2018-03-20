/*
Given a linked list, remove the nth node from the end of list and return its head.

For example,

   Given linked list: 1->2->3->4->5, and n = 2.

   After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:
Given n will always be valid.
Try to do this in one pass.
*/
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
  let dummy = new ListNode(0)
  dummy.next = head
  let curr = dummy
  let k = 1
  let stack = []
  let node

  while (curr) {
    stack.push(curr)
    curr = curr.next
  }

  while (k <= n) {
    node = stack.pop()
    k++
  }

  curr = stack.pop()
  curr.next = node.next
  return dummy.next
}
