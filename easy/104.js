//#104
//https://leetcode.com/problems/maximum-depth-of-binary-tree/

var maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  let q = [root];
  let depth = 0;

  while (q.length) {
    let n = q.length;

    for (let i = 0; i < n; i++) {
      let node = q.shift();

      if (node.left) {
        q.push(node.left);
      }

      if (node.right) {
        q.push(node.right);
      }
    }
    depth++;
  }

  return depth;
};
