/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  let i = str.charCodeAt(0);

  for(let x =1; x < str.length; x++){
    if(str.charCodeAt(x) !== i+x){
      return String.fromCharCode(i+x)
    }
  }
}

console.log(
fearNotLetter("abcdefghijklnopqrstuvwxyz")
);
