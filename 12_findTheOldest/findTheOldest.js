const findTheOldest = function(array) {
  let currentYear = 2023;
  let newArray = array.sort(function(a, b) {
    if (!a.yearOfDeath) {
      let personA = a.yearOfBirth - currentYear;
      let personB = b.yearOfBirth - b.yearOfDeath;
      return personA > personB ? -1 : 1;
    } else if (!b.yearOfDeath) {
      let personA = a.yearOfBirth - a.yearOfDeath;
      let personB = b.yearOfBirth - currentYear;
      return personA > personB ? -1 : 1;
    } else {
      let personA = a.yearOfBirth - a.yearOfDeath;
    let personB = b.yearOfBirth - b.yearOfDeath;
    return personA > personB ? -1 : 1;
    }
  })

  let oldestArray = newArray.slice(-1);
  return oldestArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;
