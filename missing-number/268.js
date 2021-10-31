//#268
//https://leetcode.com/problems/missing-number/

//Solution 1
var missingNumber = function(nums) {
    let n = nums.length
    
    let total = 0;
    
    nums.forEach((n)=>{
        total+=n
    })
    
    return n * (n+1)/2 - total
};


