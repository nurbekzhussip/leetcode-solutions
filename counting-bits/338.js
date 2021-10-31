//#338
//https://leetcode.com/problems/counting-bits/

//Solution 1
var countBits = function (n) {
  let memo = Array(n + 1).fill(0);

  for (let i = 0; i <= n; i++) {
    memo[i] = memo[i >> 1] + (i % 2);
  }

  return memo;
};

//Solution 2
/* var countBits = function (n) {
  let arr = [];

  for (let i = 0; i <= n; i++) {
    arr[i] = Number(i).toString(2).split("1").length - 1;
  }

  return arr;
};
 */
