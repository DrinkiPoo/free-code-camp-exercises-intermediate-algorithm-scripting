/*
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
*/

function dropElements(arr, func) {
let count = arr.length;

for(let x in arr){
  if(func(arr[x])){
    count = x;
    break;
  }
}

return arr.splice(count);
}

console.log(
dropElements([1, 2, 3], function(n) {return n < 3; })
);

//Instead of using the variable 'count', i could have used var instead of let in the for loop and used the value to splice the array
//This is because let has a function/code block while var does not (Or at least that's how I understand it)
