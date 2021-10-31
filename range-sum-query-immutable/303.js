//#53
//https://leetcode.com/problems/range-sum-query-immutable/

var NumArray = function (nums) {
  this.nums = nums;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  let arr = this.nums;
  let total = 0;

  for (let i = left; i <= right; i++) {
    total += arr[i];
  }
  return total;
};
