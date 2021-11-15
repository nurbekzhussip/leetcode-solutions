//543
//https://leetcode.com/problems/diameter-of-binary-tree/

var diameterOfBinaryTree = function (root) {
  let diameter = 0;

  //lp - longest path
  function lp(node) {
    if (!node) {
      return 0;
    }

    let left = lp(node.left);
    let right = lp(node.right);

    if (diameter < left + right) {
      diameter = left + right;
    }

    const t = left > right ? left : right;

    return t + 1;
  }
  lp(root);

  return diameter;
};
