//#234
//https://leetcode.com/problems/palindrome-linked-list/

var isPalindrome = function (head) {
  function middleOfList(list) {
    let slow = list;
    let fast = list;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }

  function reverse(list) {
    let prev = null;
    let current = list;

    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return prev;
  }

  let middle = middleOfList(head);
  let reverse2 = reverse(middle);

  while (reverse2) {
    if (reverse2.val != head.val) {
      return false;
    }

    reverse2 = reverse2.next;
    head = head.next;
  }

  return true;
};
