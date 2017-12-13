const reverseBetween = (head, m, n) => {
  let node = head;
  let index = 1;
  let arr = [];
  let end;

  while (node && index <= n) {
    if (index >= m) {
      arr.push(node);
    }

    if (index === n) {
      arr[0].next = node.next;
      end = node.next;
    }

    node = node.next;
    index++;
  }

  node = head;
  while (node.next !== end) {
    node.next = arr.pop();
    node = node.next;
  }

  return head;
};