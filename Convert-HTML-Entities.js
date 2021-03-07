/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
  let obj = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  return str.split("")
  .map(char => (obj.hasOwnProperty(char))
  ? obj[char]
  : char
  ).join("");
}

console.log(
convertHTML('Stuff in "quotation marks"')
);
