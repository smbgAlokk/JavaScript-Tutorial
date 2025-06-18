/*
Constructor Function:

🧱 What is a Constructor Function in JS?
A constructor function is a normal function used to create multiple objects that have the same structure.

🧠 Hinglish:

"Constructor ek aisa function hota hai jo blueprint banata hai naye naye object banane ke liye!"
"Ek hi design se 100 objects banao – sab same shape ke."

🎨 Example:

function Student(name, age) {
  this.name = name;
  this.age = age;
}
✅ Use it with new keyword:

const s1 = new Student("Alok", 22);
const s2 = new Student("Ravi", 24);

console.log(s1.name); // Alok
console.log(s2.name); // Ravi
🧠 this.name means → "Set the name property on the object being created"

🔍 How It Works Internally (Behind the Scenes)

new Student("Alok", 22);
JavaScript does:

Creates empty object: {}

Sets this to that object

Adds name and age to it using this.name = name

Returns the object

📦 Real-Life Analogy (To Never Forget)
🧑‍🏫 Think of a constructor function like a stamp machine:

💡 "Student(name, age)" is the machine
🔨 "new Student('Alok', 22)" = press the machine
🧍 You get a brand new Student object with name and age

🧪 Adding Methods Inside Constructor (But Not Recommended)

function Hero(name) {
  this.name = name;
  this.sayHi = function () {
    console.log("Hi, I am " + this.name);
  };
}

const h1 = new Hero("Ironman");
h1.sayHi(); // Hi, I am Ironman
🔴 Problem: Every object will get a new copy of sayHi() → Memory waste

✅ Better Way: Use prototype for methods

function Hero(name) {
  this.name = name;
}

Hero.prototype.sayHi = function () {
  console.log("Hi, I’m " + this.name);
};

const h1 = new Hero("Thor");
const h2 = new Hero("Hulk");

h1.sayHi(); // Hi, I’m Thor
h2.sayHi(); // Hi, I’m Hulk
✅ Now sayHi() is shared by all Hero objects → Efficient memory usage

🤝 Constructor Function vs Class

// Constructor function
function Person(name) {
  this.name = name;
}

// Class (Modern syntax, same job)
class Person {
  constructor(name) {
    this.name = name;
  }
}
🧠 Same kaam, different look
Use class for cleaner and modern syntax. But both use new and behave similarly.

🔁 Summary Table
Concept	Meaning	Hinglish
Constructor	Function to create objects	"Ek design jisse naye object bante hain"
this	Refers to the new object being created	"Main naye object mein data bhar raha hoon"
new keyword	Calls constructor and returns new obj	"Naya object chahiye"
.prototype	Place to define shared methods	"Ek hi copy sab use kar sakein"

🧠 Hinglish Shortcut to Remember:
"Constructor function ek design hota hai. new se us design ke object banate hain."
"Methods ko .prototype mein daalo taaki memory bachao!"

*/
