//#136
//https://leetcode.com/problems/single-number/

var singleNumber = function(nums) {
    let num = 0
    
    for(let i=0; i<nums.length; i++){
        num ^= nums[i]
    }
    
    return num
};