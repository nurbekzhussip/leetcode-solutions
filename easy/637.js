//https://leetcode.com/problems/average-of-levels-in-binary-tree/

//Solution 1
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
