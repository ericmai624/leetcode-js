const reverseList = (head) => {
  let curr = head;
  let prev = null;

  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};