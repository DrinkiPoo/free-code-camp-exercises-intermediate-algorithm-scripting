/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
  let i = 1;
  let j = 1;
  let sum =0;

  while (i <= num){
    if(i%2 == 1)sum += i;
    i += j;

    if (j > num) break;

    if (j%2 == 1) sum += j;
    j += i;
  }
  return sum;
}


console.log(
sumFibs(1000e)
);
