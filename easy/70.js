//#70
//https://leetcode.com/problems/climbing-stairs/

//Solution 1
var climbStairs = function (n) {
  if (n === 1) {
    return 1;
  }

  n1 = 1;
  n2 = 2;

  for (let i = 3; i <= n; i++) {
    let temp = n1;
    n1 = n2;
    n2 = temp + n2;
  }

  return n2;
};

//Solution 2
/* var climbStairs = function (n) {
  let arr = [0, 1];

  if (arr[n]) {
    return arr[n];
  } else {
    for (let i = 2; i <= n + 1; i++) {
      arr[i] = arr[i - 1] + arr[i - 2];
    }

    return arr[arr.length - 1];
  }
}; */
