/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.
*/

function translatePigLatin(str) {
  let pos = str.search(/[AEIOUaeiou]/);

  if(pos == 0){
    return str + "way";
  } 
  else if (pos == -1) {
    return str + "ay";
  }
  else {
    return str.slice(pos) + str.slice(0,pos) + "ay";
  }
  
}


console.log(
	translatePigLatin("orange"), translatePigLatin("consonant"), translatePigLatin("rythm")
);
