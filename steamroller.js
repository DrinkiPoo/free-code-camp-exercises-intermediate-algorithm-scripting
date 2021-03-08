/*
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
let final = [];

function recurse(x){
  for (let y of x){
    if (y instanceof Array == false){
      final.push(y);
    }
    else {
      recurse(y);
    }
  }
}
recurse(arr)
return final;
}

console.log(
steamrollArray([1, [2], [3, [[4]]]])
);
