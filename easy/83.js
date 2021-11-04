//#83
//https://leetcode.com/problems/remove-duplicates-from-sorted-list/

var deleteDuplicates = function (head) {
  let res = head;

  let current = res;

  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return res;
};
