const palindromes = function (phrase) {
  let re = /[^A-Za-z0-9]/g;
  let lowercasePhrase = phrase.toLowerCase().replace(re, '');
  let reversePhrase = lowercasePhrase.split('').reverse().join('');

  return reversePhrase === lowercasePhrase;

};

// Do not edit below this line
module.exports = palindromes;
