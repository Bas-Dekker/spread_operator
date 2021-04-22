// Functie 1
const sum = function (x, y) {
  return x + y;
};
console.log(sum(2, 3));

const sum2 = function (...numbers) {
  return numbers.reduce((prev, curr) => prev + curr);
};
console.log(sum2(2, 3, 4, 5));

// Functie 2
const sum3 = function (a, b, c) {
  return a + b + c;
};

const numbers = [1, 2, 3];

console.log(sum3(...numbers));

//Oefenening genoteerd in arrow functions:

//Function 1 - Rest Parameter:
const sumRest = (...numbers) =>
  numbers.reduce((prev, current) => prev + current);

console.log(sumRest(1, 2, 3, 4, 5));

//Function 2 - Spread Operator:
const sumSpread = (x, y, z) => x + y + z;

let num = [1, 2, 3];

console.log(sumSpread(...num));
