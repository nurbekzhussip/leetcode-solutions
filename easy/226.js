//#226
//https://leetcode.com/problems/invert-binary-tree/

var invertTree = function (root) {
  if (!root) {
    return null;
  } else {
    invertTree(root.left);
    invertTree(root.right);

    let temp = root.left;
    root.left = root.right;
    root.right = temp;
  }

  return root;
};
