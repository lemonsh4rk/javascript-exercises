const convertToCelsius = function(temperature) {
  let celsius = (temperature - 32) * 5 / 9;
  return Number(celsius.toFixed(1))
};

const convertToFahrenheit = function(temperature) {
  let fahrenheit = temperature * 9 / 5 + 32;
  return Number(fahrenheit.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
