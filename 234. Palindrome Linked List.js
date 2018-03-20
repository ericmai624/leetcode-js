/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

const isPalindrome = head => {
  if (!head || !head.next) {
    return true
  }

  let slow = head
  let fast = head

  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }

  let prev = null
  let curr = secondHead
  slow.next = null

  while (curr) {
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  let l1 = head
  let l2 = prev

  while (l1 && l2) {
    if (l1.val !== l2.val) {
      return false
    }
    l1 = l1.next
    l2 = l2.next
  }

  return true
}
