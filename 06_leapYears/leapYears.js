const leapYears = function(year) {
// If the last two digits of a number are divisible by 4, the number is divisible by 4 --- IIIIIRrelevant on java lmao, you just need the remainder to be 0, so number % 4 === 0
// include any year that is divisible by 400 so, number % 400 === 0
// also exclude any year that is divisible by 100. so skip any number % 100 === 0 
// 

if (year % 400 === 0) {
  return true;
} else if (year % 100 === 0) {
  return false;
} else if (year % 4 === 0){
  return true;
} else {
  return false;
}



};

// Do not edit below this line
module.exports = leapYears;
