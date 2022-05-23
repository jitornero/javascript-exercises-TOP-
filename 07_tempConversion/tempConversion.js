const ftoc = function(temp) {
let celsius = (temp-32) * (5/9);
let round = Math.round(celsius *10) /10;
console.log("ftoc",round);
return round;

};

const ctof = function(temp) {
let farenheit = (temp * 9/5) +32; 
let round = Math.round(farenheit *10) /10;
console.log("ctof", round)
return round;
};


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
