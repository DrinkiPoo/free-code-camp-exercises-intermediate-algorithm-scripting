/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

function sumAll(arr) {
  let b = Math.max(...arr);
  let s = Math.min(...arr);

  console.log(b,s);
  return b*(b+1)/2 - s*(s-1)/2;
}


console.log(
	sumAll([1, 4])
);
