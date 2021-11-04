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
var averageOfLevels = function (root) {
  let queue = [root];
  let res = [];

  while (queue.length) {
    //let node = queue.pop()
    let n = queue.length;
    let level_sum = 0;

    for (let i = 0; i < n; i++) {
      let node = queue.shift();
      level_sum += node.val;

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    res.push(level_sum / n);
  }

  return res;
};
