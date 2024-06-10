
function sumOfNum() {

   let sum = 0;
   
   return function(n) {

        sum = sum + n;

        return sum;
     }
    
};

let res = sumOfNum();

console.log(res(4));
console.log(res(10));
console.log(res(2));




