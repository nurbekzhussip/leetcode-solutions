//#21
//https://leetcode.com/problems/merge-two-sorted-lists/

var mergeTwoLists = function (l1, l2) {
  let merged = new ListNode(0);
  let result = merged;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      merged.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      merged.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    merged = merged.next;
  }

  while (l1) {
    merged.next = new ListNode(l1.val);
    l1 = l1.next;
    merged = merged.next;
  }
  while (l2) {
    merged.next = new ListNode(l2.val);
    l2 = l2.next;
    merged = merged.next;
  }
  return result.next;
};
