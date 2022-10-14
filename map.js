var topKFrequent = function(nums, k) {
    let obj={}
    let arr=[]
    for(let i=0;i<nums.length;i++){
        if(obj[nums[i]]){
           obj[nums[i]]++   
        }else{
           obj[nums[i]]=1
        }
    }
    
    for(let [key,value] of Object.entries(obj)){
        console.log(`key ${key} and value ${value}`)
        if(value>1){
            arr.push(key)
        }
        console.log(arr)
    }
    return arr.length
};