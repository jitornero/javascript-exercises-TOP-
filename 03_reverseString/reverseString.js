const reverseString = function(string) {
let array = string.split("");
array.reverse();
let together = array.join("");

return together;
//console.log(array);
//console.log(together);

};



reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
