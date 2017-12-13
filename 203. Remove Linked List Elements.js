/*
Remove all elements from a linked list of integers that have value val.

Example
Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
Return: 1 --> 2 --> 3 --> 4 --> 5
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

const removeElements = (head, val) => {
  if (!head) {
    return [];
  }

  if (head.val === val) {
    head = head.next;
    return removeElements(head, val);
  }

  let node = head;

  while (node && node.next) {
    if (node.next && node.next.val === val) {
      let removed = node.next;
      node.next = node.next.next;
      removed.next = null;
    } else {
      node = node.next;
    }
  }

  return head;
};