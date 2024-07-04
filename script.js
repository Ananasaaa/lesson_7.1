
function getSumOfNum() {

   let sum = 0;
   
   return function(n) {

        sum = sum + n;

        return sum;
     }
    
};

let result = getSumOfNum();

console.log(result(4));
console.log(result(10));
console.log(result(2));
console.log(result(12));




