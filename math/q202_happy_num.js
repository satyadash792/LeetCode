let isHappy = function(n) {
    let num=n;
    let sum;
    console.log(num)
    function helper(num){
        sum=0;
        console.log(num)
        while(num>0){
         sum+=Math.pow((num %10),2);
         debugger;
         num=Math.floor(num/10);
        }
     }
    if(sum<10){
        rem==1 ? true : false;
    }
    if(sum){
        helper(sum)   
    }else{
        helper(num)
    }
};

console.log(isHappy(19))