/*

🎯 Before We Begin — Think Like a Factory
Imagine you have a factory. This factory receives raw materials (data like an array), and based on what kind of machine you use (map, filter, reduce), you get different results.

Let’s say this is your raw material:

const numbers = [1, 2, 3, 4, 5];

🔁 map() — Paint Every Item 🔵
🔧 What it does:
It takes every item in the array, changes it, and gives you a new array with the same number of items.

🧠 Real-life example:
Imagine you give 5 white balls to a machine, and it paints them all blue. Now you still have 5 balls, just colored differently.

🧪 Code:
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

✅ Key points:
Same number of items

Each item is transformed

Returns a new array

🧹 filter() — Pick Only What You Need 🔍
🔧 What it does:
It checks every item and keeps only those that pass a condition.

🧠 Real-life example:
You have a bag of apples and oranges. You ask the machine: “Give me only apples.” The machine gives you a new bag with only apples.

🧪 Code:

const even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2, 4]

✅ Key points:
You may get fewer items

Items are unchanged

Returns a new array of selected items

🧱 reduce() — Build Something From Scratch 🧰
🔧 What it does:
It takes all items and builds a single result from them.

🧠 Real-life example:
You’re building a wall from bricks. You put one brick, then another, and another, until you build the wall — a single structure.

🧪 Code:

const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 15

🧩 What’s happening?

accumulator is like a memory that grows with each step.

current is the current item from the array.

So:

Step 1: 0 + 1 = 1

Step 2: 1 + 2 = 3

Step 3: 3 + 3 = 6

Step 4: 6 + 4 = 10

Step 5: 10 + 5 = 15 ✅

✅ Key points:
You get one final value

You can do anything (sum, average, object building, etc.)

It's like a super tool

🔁 Quick Recap Table:
Method	    Input Array	   Output	   Use Case
map()	    [1, 2, 3]	  [2, 4, 6]    Change each item
filter()	[1, 2, 3]	  [2]	       Keep some items
reduce()	[1, 2, 3]	  6	           Get a single result

🧠 Hinglish Summary (For Permanent Yaad)

Map: "Har cheez ko badlo, lekin sabko rakho."

Filter: "Jo chahiye wahi rakho, baaki hata do."

Reduce: "Sabko mila ke ek naya result banao."

💥 Memory Hook (Visual Example)
Imagine a Pizza Shop:

map: Add extra cheese to every slice 🍕 → 🍕🧀

filter: Keep only vegetarian slices 🍕🥦

reduce: Count total calories from all slices → 🧮 🔢

If you ever get confused, just ask:

Am I changing every item? ➡️ map

Am I choosing specific items? ➡️ filter

Am I summarizing into one thing? ➡️ reduce



*/
