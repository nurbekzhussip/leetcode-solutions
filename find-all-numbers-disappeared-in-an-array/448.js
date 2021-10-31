//#448
//https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

var findDisappearedNumbers = function(nums) {
    let i = 0
    
    while(i < nums.length){
        let pos = nums[i]-1
        if(nums[i] != nums[pos]){
            let temp = nums[i]
            nums[i] = nums[pos]
            nums[pos] = temp
        }else{
            i+=1
        }
    }
    
    let arr = []
    
    for(let j=0; j<nums.length; j++){
        if(nums[j] !== j+1){
            arr.push(j+1)
        }
    }
    
    return arr
};