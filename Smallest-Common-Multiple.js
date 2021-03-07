/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/

function smallestCommons(arr) {
  //find LCM of largest two numbers, then find the LCM of the result and the next largets number and so on. Final LCM will the LCM of all numbers
  // we need GCD to find LCM
  // we will use the chinese remainder theore (recursively dividing two numbers... You'll see)

  let gcd = (a,b) => (a%b == 0) ? b : gcd(b, a%b)

  let a = Math.max(...arr);
  let b = a -1;
  let lcm;
  while(b >= Math.min(...arr)){
    lcm = a * b / gcd (a,b);
    a = lcm;
    b--;
  }
  return lcm;
}

console.log(
	smallestCommons([2,10])
);

// This is neat and concise but idk how resource-hungry it is
// This is my own algorithm, but I found on online that seems simple enough
// I am sure i can implement that easily if i wanted to
// I am in a hurry to get to react, so 
