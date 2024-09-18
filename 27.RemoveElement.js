/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let n=nums.length-1;
    let ptr = n;

    for(let i=n;i>=0;i--){
        if(nums[i]===val){
            let temp = nums[i]
            nums[i]=nums[ptr]
            nums[ptr]=temp;
            ptr--;
        }
    }
    return ptr+1
};
