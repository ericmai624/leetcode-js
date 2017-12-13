/*
Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

Note: Do not modify the linked list.

Follow up:
Can you solve it without using extra space?
*/

const detectCycle = (head) => {
  let slow = head;
  let fast = head;
  
  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
          break;
      }
  }
  
  if (!fast || !fast.next) {
      return null;
  }
  
  slow = head;
  while (slow !== fast) {
      slow = slow.next;
      fast = fast.next;
  }
  
  return fast;
}