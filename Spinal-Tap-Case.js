/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

//I hate regex!!

function spinalCase(str) {
	return str
  	.split(/(?=[A-Z])|\W|_/)
  	.join("-")
  	.toLowerCase();

}



console.log(
	spinalCase('This Is Spinal Tap')
);
