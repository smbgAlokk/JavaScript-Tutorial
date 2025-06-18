/*

this:

🎯 What is this in JavaScript?
🔹 this refers to the object that is currently calling or owning the method/function.

🧠 Hinglish:

"this ka matlab hai: ‘Main kaun hoon?’ Ya ‘Mera malik kaun hai iss waqt?’"

👨‍🏫 Basic Example: Object Method

const person = {
  name: "Alok",
  greet() {
    console.log("Hi, I’m " + this.name);
  }
};

person.greet(); // Hi, I’m Alok
🧠 Breakdown:

this.name means: "Go to the object calling me (person) and get the name property."

🧠 Visual Hook:
🧑‍💻 this is like a person saying:
“Mera boss kaun hai? Jo mujhe bula raha hai, main uska hi hoon.”

🔄 this Changes Depending on HOW You Call the Function
🧪 1. Inside an Object Method → this = The Object

const car = {
  brand: "Tesla",
  show() {
    console.log(this.brand);
  }
};

car.show(); // Tesla
🧠 "Main car object ka hoon" → this = car

❌ 2. In a Regular Function (not in an object) → this = undefined (in strict mode)

function show() {
  console.log(this);
}
show(); // In browser: window (non-strict), In strict mode: undefined
🧠 "Mujhe koi owner nahi mila toh main khud confused ho gaya!"

🪄 3. In a Class → this = Current instance

class Student {
  constructor(name) {
    this.name = name;
  }

  intro() {
    console.log("My name is " + this.name);
  }
}

const s1 = new Student("Alok");
s1.intro(); // My name is Alok
🧠 "Main Student class ka hoon, aur mujhe bulane wala s1 hai"

🪄 4. Arrow Function → this doesn’t change!
❗ Arrow functions don’t have their own this, they inherit it from the surrounding (outer) scope.


const laptop = {
  brand: "HP",
  show: () => {
    console.log(this.brand);
  }
};

laptop.show(); // undefined
🧠 "Arrow function bole: Mujhe 'this' nahi chahiye, jo bahar ka 'this' hai, wahi use kar lunga"

⚠️ Common Confusion:
❌ Using this in arrow function inside an object:

const user = {
  name: "Alok",
  greet: () => {
    console.log("Hi " + this.name);
  }
};

user.greet(); // Hi undefined 😢
✅ Fix it with a regular function:


const user = {
  name: "Alok",
  greet() {
    console.log("Hi " + this.name);
  }
};

user.greet(); // Hi Alok 😄
🧠 Hinglish Summary Table:
Where?	What is this?	Hinglish
Object Method	The object itself	"Main apne malik ka hoon"
Regular Function	undefined in strict mode	"Mujhe samajh nahi aaya main kaun hoon"
Class Method	The instance of the class	"Main class ka object hoon"
Arrow Function	Takes this from outer scope	"Main dusre ka 'this' use karta hoon"

🔁 Final Tip: Never Forget
🧠 "Jo function ya method call kar raha hai, uske hisaab se this badalta hai."

If you're ever confused, just ask yourself:

"Yeh function kis object ke under likha gaya tha? Kis object ne ise call kiya?"

That object is what this refers to. 🎯

*/

const user1 = {
  userName: "Alok",
  loginCount: 10,
  signedIn: true,

  getUserDetails: function () {
    console.log("UserName: ", this.userName);
  },
};
// user1.getUserDetails();

/*

  new:


  📌 What is new in JavaScript?
The **new** keyword is used to create a new object from a constructor function or a class.

🧠 Hinglish:

"new bolta hai — ‘Bhai ek fresh naya object bana de iss design ke hisaab se!’"

🎨 Think of new Like a Stamp Machine
Imagine you’re a factory.

You have a mould (blueprint) → constructor function or class

You want to create multiple items (objects) from it

Use the new keyword as the machine to produce items

✅ Using new with Constructor Function

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p1 = new Person("Alok", 22);
console.log(p1.name); // Alok
🧠 What's Happening Behind the Scenes?


const p1 = new Person("Alok", 22);
⬇️ Internally JavaScript does this:


 1. Create a new empty object
let p1 = {};

 2. Set the prototype
p1.__proto__ = Person.prototype;

 3. Bind `this` to the new object
Person.call(p1, "Alok", 22);

 4. Return the object
📦 new with Class (Modern OOP Style)

class Car {
  constructor(model) {
    this.model = model;
  }
}

const myCar = new Car("Tesla");
console.log(myCar.model); // Tesla
🧠 Hinglish:
"Car class ke design ke hisaab se ek naya Tesla object ban gaya."

⚙️ What Does new Actually Do?
Step	Description	Hinglish
1	Creates empty object {}	"Khaali dabba ban gaya"
2	Sets prototype	"Banaye object ka DNA set kiya"
3	Binds this to that object	"this ko naye object se joda"
4	Returns that object	"Final object wapas mil gaya"

🧠 When Should You Use new?
✅ Use new when:

You're using a constructor function

You're creating an object from a class

You want each object to have its own properties and methods

❌ What Happens if You Forget new?

function Student(name) {
  this.name = name;
}

const s = Student("Alok"); // Forgot `new`
console.log(s); // undefined 😢
🧠 Here, this.name = name runs in global scope → name goes to window.name in browser.

Always use new with constructor functions or classes!

🧠 Hinglish Shortcut to Remember:
"new ka matlab hai ek naya object banana — class ya constructor ke design ke hisaab se."

Like:

"new Student() → ek naya student bana!"

🧪 Bonus: Custom Constructor with Method

function Hero(name, power) {
  this.name = name;
  this.power = power;
  this.introduce = function() {
    console.log(`I am ${this.name} and my power is ${this.power}`);
  };
}

const h1 = new Hero("Spiderman", "Web Slinging");
h1.introduce(); // I am Spiderman and my power is Web Slinging
📊 Summary Table:
Concept	Meaning	Example
new	Creates a new object from blueprint	new Person("Alok", 22)
Constructor	Function used to create object	function Person() {...}
this	Refers to the new object being created	this.name = name;
Return	Returns the created object automatically	(no need to write return)

  
  */
