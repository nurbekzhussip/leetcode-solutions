//#144
//https://leetcode.com/problems/binary-tree-preorder-traversal/

var preorderTraversal = function (root) {
  if (!root) {
    return [];
  }

  let res = [];

  function dfs(node, callback) {
    if (callback) {
      callback(node);
    }

    if (node.left) {
      dfs(node.left, callback);
    }

    if (node.right) {
      dfs(node.right, callback);
    }
  }

  dfs(root, (node) => {
    res.push(node.val);
  });

  return res;
};
