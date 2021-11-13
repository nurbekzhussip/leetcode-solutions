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
var isSameTree = function(p, q) {
    
  if(!p && !q){
      return true
  }else if(!p || !q){
      return false
  }
  
  if(p.val === q.val){
      return isSameTree(p.right, q.right) && isSameTree(p.left, q.left)
  }else{
      return false
  }