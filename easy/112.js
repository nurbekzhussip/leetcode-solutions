//112
//https://leetcode.com/problems/path-sum/

//Solution 1
var hasPathSum = function (root, targetSum) {
  let hasTotal = false;
  const dfs = (node, target, total = 0) => {
    if (!node) {
      return null;
    }

    if (node.left) {
      dfs(node.left, target, total + node.val);
    }

    if (node.right) {
      dfs(node.right, target, total + node.val);
    }
    if (!node.left && !node.right) {
      if (total + node.val === target) {
        hasTotal = true;
      }
    }
  };
  dfs(root, targetSum);
  return hasTotal;
};

//Solution 2
// var hasPathSum = function (root, targetSum) {
//   if (!root) {
//     return false;
//   }
//   targetSum -= root.val;

//   if (!root.right && !root.left) {
//     return targetSum === 0;
//   } else {
//     return (
//       hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum)
//     );
//   }
// };
