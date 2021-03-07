/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
*/

function destroyer(arr) {
	for(let x=1; x<arguments.length; x++){
		while (arguments[0].indexOf(arguments[x]) !== -1){
			arguments[0].splice(arguments[0].indexOf(arguments[x]), 1);
		}
	}
	return arguments[0];
}



console.log(
	destroyer([1, 2, 3, 1, 2, 3], 2, 3)
);
