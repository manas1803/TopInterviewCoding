/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count=1;
    let currElement=nums[0]
    for(let i=1;i<nums.length;i++){
        if(nums[i]===currElement){
            count++
        }
        else{
            count--;
        }
        if(count<=0){
            currElement=nums[i]
            count=1;
        }
    }
    return currElement
};
console.log(majorityElement([1,3,1,1,4,1,1,5,1,1,6,2,2]))