/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/

function uniteUnique(arr) {
  let final = [];
  console.log([...arguments])

  for(let x in arguments){
    for(let y of arguments[x]){
      if(final.indexOf(y) == -1) final.push(y);
    }
  }
  return final;
}

console.log(
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
);

//This looks simple and easy to understand, but I have another way as well
//
//function uniteUnique(arr){
//return Object.keys(arguments).reduce((acc, cur) => acc.concat(cur)).filter((value, index, array) => index == array.indexOf(value));
//}

