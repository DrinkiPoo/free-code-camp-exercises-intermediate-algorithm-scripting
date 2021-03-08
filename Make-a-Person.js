/*
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.
*/

var Person = function(firstAndLast) {
 let firstn= arguments[0].split(" ")[0];
 let lastn= arguments[0].split(" ")[1];


  this.getFirstName = () => firstn;
  this.getLastName = () => lastn;
  this.getFullName = () => `${firstn} ${lastn}`;

  this.setFirstName = (first) => firstn = first;
  this.setLastName = (last) => lastn = last;
  this.setFullName = (firstAndLast) => {
    firstn = firstAndLast.split(" ")[0];
    lastn = firstAndLast.split(" ")[1];
  };

};

var bob = new Person('Bob Ross');
console.log(bob); //only shows methods, names are private
console.log(bob.getFullName()) //shows Bob Ross

bob.setFullName("Bill Buttlicker");
console.log(bob.getFullName()); //name changed to Bill Buttlicker

