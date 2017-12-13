/*
Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.
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
 * @return {ListNode}
 */

const deleteDuplicates = (head) => {
  if (!head || !head.next) {
      return head;
  }
  
  let set = new Set();
  set.add(head.val);
  let prev = head;
  let curr = head.next;
  
  while (curr) {
      if (set.has(curr.val)) {
          prev.next = curr.next;
          curr = curr.next;
      } else {
          set.add(curr.val);
          prev = curr;
          curr = curr.next;
      }
  }

  return head;
};