const fibonacci = function(number) {
  if (number < 0) {
    return 'OOPS'
  }


  let firstDigit = 0;
  let secondDigit = 1;
  let nextSum;
  let fibonacciArray = [1];

  for (let i = 0; i < 25; i++) {
    nextSum = firstDigit + secondDigit;
    fibonacciArray.push(nextSum);

    firstDigit = secondDigit;
    secondDigit = nextSum;
  }

  return fibonacciArray[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
