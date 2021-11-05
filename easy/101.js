//#101
//https://leetcode.com/problems/symmetric-tree/

var isSymmetric = function (root) {
  function isMirror(n1, n2) {
    if (!n1 && !n2) {
      return true;
    }

    return (
      n1?.val === n2?.val &&
      isMirror(n1.left, n2.right) &&
      isMirror(n1.right, n2.left)
    );
  }

  return isMirror(root.left, root.right);
};
