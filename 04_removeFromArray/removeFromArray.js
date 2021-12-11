const removeFromArray = function (array, ...nums) {
  for (let n of nums) {
    if (array.indexOf(n) === -1) continue;
    array.splice(array.indexOf(n), 1);
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
