// Create an Array of only even numbers from the above array

var arr = new Array(101);

for (let i = 0; i < arr.length; i++) {
  arr[i] = i;
}
console.log('arr', arr);
var even = function(num) {
  return num % 2 === 0;
};
const newArr = arr.filter(even);

console.log('newArr', newArr);

// Create a function that returns a Promise which returns the
// square of only even numbers and
// throws an error if an odd number is passed

var square = function(num){
  return num*num;
}

function squareofEven(arr){
  return Promise((resolve,reject)=>{
    let squaredArray = arr.filter(square);




  })
}
