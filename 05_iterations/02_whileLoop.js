// while

let index = 0;

while (index <= 10) {
  console.log(`value of index is ${index}`);
  index = index + 2;
}

let arr = ["batman", "superman", "flash"];
let a = 0;
while (a < arr.length) {
  console.log(`Vale is ${arr[a]}`);
  a = a + 1;
}

// do-while => In this first do the work than check the condition.

let score = 1;

do {
  console.log(`value is ${score}`);
  score++;
} while (score <= 10);
