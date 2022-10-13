/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums) {
//     let arr=[]
// nums.sort(function(a, b){return a - b});
// let l,r;
// for(let i=0;i<nums.length-2;i++){
//     r=nums.length-1;
//     l=i+1;
//     while(l<r){
//         if(nums[i]+nums[l]+nums[r]==0){
//             arr.push([nums[i],nums[l],nums[r]])
//             l++
//         }
//         else if(nums[i]+nums[l]+nums[r]>0){
//             r--;
//         }
//         else{
//             l++
//         }
//     } 
 
// }
//      const mySet = new Set(arr)
//      console.log([...mySet])
//     return arr
// };

var threeSum = function(nums) {
    nums = nums.sort(function(a,b){
    return a - b;
    });
    let aLength = nums.length,obj={},result=[];
    for(i=0;i<aLength-2;i++){
    let target = -nums[i];
    let left = i+1;
    let right = aLength-1;
    while(left < right){
    curSum = nums[left] + nums[right];
    if(curSum < target){
    left++;
    }else if(curSum > target){
    right--;
    }else{
    let arr = [-target, nums[left], nums[right]];
    console.log(arr)
    obj[arr] = arr;
    left++;
    right--;
    }
    }
    }
    return Object.values(obj);
    };
    
    console.log(threeSum ([-1,0,1,2,-1,-4]))