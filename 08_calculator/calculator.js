const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  if (array.length < 1) return 0;
  let sum = 0;
  for (item of array) {
    sum += item;
  }
  return sum;
};

const multiply = function (array) {
  let sum = 1;
  for (item of array) {
    sum *= item;
  }
  return sum;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  if (num === 0) return 1;

  for (let i = num - 1; i > 0; i--) {
    num = num * i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
