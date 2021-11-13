//#100
//https://leetcode.com/problems/same-tree/

//Solution 1
if (!p && !q) {
  return true;
} else if (!p || !q) {
  return false;
}

if (p.val === q.val) {
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
} else {
  return false;
}

//Solution 2
// var isSameTree = function(p, q) {

//   if(!p && !q){
//       return true
//   }else if(!p || !q){
//       return false
//   }

//   if(p.val === q.val){
//       return isSameTree(p.right, q.right) && isSameTree(p.left, q.left)
//   }else{
//       return false
//   }
// }

//Solution 3
// var isSameTree = function (p, q) {
//   let queue = [p, q];

//   while (queue.length) {
//     let p1 = queue.shift();
//     let q1 = queue.shift();

//     if (!p1 && !q1) {
//       continue;
//     }else if (!p1 || !q1) {
//       return false;
//     }
//     if (p1.val !== q1.val) {
//       return false;
//     }

//     queue.push(p1.left)
//     queue.push(q1.left)
//     queue.push(p1.right)
//     queue.push(q1.right)
//   }
//     return true
// };
