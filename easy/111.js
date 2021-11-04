//111
//https://leetcode.com/problems/minimum-depth-of-binary-tree/

//Solution 1
var minDepth = function (root) {
  if (!root) {
    return 0;
  }

  let minLeft = minDepth(root.left);
  let minRight = minDepth(root.right);

  if (minLeft === 0 || minRight === 0) {
    return 1 + Math.max(minLeft, minRight);
  }

  return 1 + Math.min(minLeft, minRight);
};
