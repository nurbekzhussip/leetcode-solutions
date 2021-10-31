//#217
//https://leetcode.com/problems/contains-duplicate/

//Solution 1
var containsDuplicate = function(nums) {
    const obj = {}
    let i=0
    
    while(nums.length > i){
        if(obj[nums[i]]){
            obj[nums[i]] += 1
            return true
        }else{
            obj[nums[i]] = 1
        }
        i++
    }
    
    return false
}

//Solution 2
/* var containsDuplicate = function(nums) {
    const arr = []
    
    for(let i=0; i<nums.length; i++){
        if(arr.includes(nums[i])){
            return true
        }
        arr.push(nums[i])
    }
        
    return false
} */

console.log(containsDuplicate([1,2,3,1]))