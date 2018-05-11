// Question 1: Create an Array from 0...100 without using traditional For-loop

var arr = new Array(101);

for (let i = 0; i < arr.length; i++) {
  arr[i] = i;
}
console.log(arr);
