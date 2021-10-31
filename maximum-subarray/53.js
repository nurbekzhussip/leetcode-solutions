//#53
//https://leetcode.com/problems/maximum-subarray/

var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];

    currentSum = currentSum + num > num ? currentSum + num : num;
    maxSum = currentSum > maxSum ? currentSum : maxSum;
  }

  return maxSum;
};
