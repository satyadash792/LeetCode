
 let trailingZeroes = function(n) {
    let sum=0
    let power=1

   while(Math.pow(5,power)<=n){
           sum+=Math.floor(n/Math.pow(5,power))
             power++;
         }
    return sum
};

console.log(trailingZeroes(5))
console.log(trailingZeroes(10))