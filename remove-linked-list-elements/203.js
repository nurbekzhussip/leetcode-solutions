//#203
//https://leetcode.com/problems/remove-linked-list-elements/

var removeElements = function (head, val) {
  let prev = new ListNode(0);
  prev.next = head;

  let current = prev;

  while (current && current.next) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return prev.next;
};
