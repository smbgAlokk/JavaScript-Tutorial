// map()

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const myNum = myNumber.map((num) => num + 10);
// console.log(myNum);

// Chainig

const newNums = myNumber
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 40);

console.log(newNums);

/*
Output:

[
  41, 51,  61, 71,
  81, 91, 101
]

*/
