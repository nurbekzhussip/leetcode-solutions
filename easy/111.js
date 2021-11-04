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

//Solution 2
var minDepth = function (root) {
  if (!root) {
    return 0;
  }

  let depth = 1;
  let queue = [root];

  while (queue.length) {
    let n = queue.length;

    for (let i = 0; i < n; i++) {
      let node = queue.shift();

      if (!node.left && !node.right) {
        return depth;
      }

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    depth++;
  }

  return depth;
};
