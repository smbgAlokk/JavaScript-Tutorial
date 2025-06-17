// reduce

const myNums = [1, 2, 3];

const myTotal = myNums.reduce((acc, cuurval) => {
  return acc + cuurval;
}, 0);
console.log(myTotal);

const shopingCart = [
  {
    itemName: "Js Course",
    price: 999,
  },
  {
    itemName: "Python Course",
    price: 599,
  },
  {
    itemName: "Mobile Dev Course",
    price: 5999,
  },
  {
    itemName: "Cloud Computing Course",
    price: 1999,
  },
];

const payableAmount = shopingCart.reduce((initialAmount, item) => {
  return initialAmount + item.price;
}, 0);

console.log(payableAmount);
