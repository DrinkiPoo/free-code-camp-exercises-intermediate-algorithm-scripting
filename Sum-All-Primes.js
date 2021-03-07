/*
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

function sumPrimes(num) {
  let number = 2;
  // Starting will 2 since there are no primes smaller than 2
  let arr = [];
  // We will store primes here as we discover them. It's empty since there are no known primes to out program
  let temp;
  // A subset of arr. We will only store primes less than the square root of num here
  // because we only need to check divisibility by primes up till the integer less than/eq
  // to the root of the number in question
  // eg sq root of 41 is 6.4, so we only need to check is 41 is divisible by 2, 3 & 5 

  while (number <= num){
    temp = arr.filter( i => i <= Math.pow(num, 0.5))
    //every time number increments, this array will (potentially) update
    // wont update after a the largest number is just shy of sq root of num (argument)

    if(temp.every(x => number%x !== 0)) arr.push(number);
    //if none of the numbers in temp (known primes < sq root of num) evenly divide out number
    //we can say it's a prime number and gets pushed to arr
    //also gets pushed to temp in the next loop if it's small enough

    number++;
  }
  
  return arr.reduce((a,b) => a+b, 0)
  }

console.log(
  sumPrimes(977)
); 
// prints out 73156
// quite happy that with my algorithm. Looks neat and concise if I delete all the comments
// Happy that i didn't have to look/ask for algorithms :)
