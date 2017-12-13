/*
Given a linked list, determine if it has a cycle in it.

Follow up:
Can you solve it without using extra space?
*/

const hasCycle = (head) => {
  let slow = head;
  let fast = head;
  
  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
          return true;
      }
  }
  
  return false;
};