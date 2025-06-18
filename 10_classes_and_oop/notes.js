/*
Javascript and classes

## OOP

🎯 What is OOP (Object-Oriented Programming)?
OOP is a way of writing code where you model real-world things as objects with properties (data) and methods (actions).

👶 Soch lo:

Car → Properties: color, speed | Methods: drive(), brake()

Person → Properties: name, age | Methods: speak(), walk()

In JavaScript, OOP is done using objects, constructor functions, and classes.

🧱 4 Pillars of OOP in JavaScript
Let’s build this like a memory palace.

1. Encapsulation – "Sab kuch ek dabbe mein"
Wrap data + functions in a single unit (object/class)

🧠 Hinglish:
"Ek person object ke andar uska naam, age aur uski actions (walk, talk) sab rakhe gaye."


const person = {
  name: "Alok",
  age: 22,
  speak() {
    console.log("Hi, I'm " + this.name);
  }
};
person.speak(); // Hi, I'm Alok
2. Abstraction – "Sirf zaroori cheezein dikhao"
Hide complex stuff and only show essential details

🧠 Hinglish:
"Car ke andar engine kaise kaam karta hai wo nahi dikhte, sirf drive() button dikh raha hai."


class Car {
  startEngine() {
    console.log("Engine started 🚗💨");
  }

  drive() {
    this.startEngine(); // hide this from user
    console.log("Car is driving...");
  }
}

const myCar = new Car();
myCar.drive(); // Only drive shown to user
3. Inheritance – "Bachcha maa baap se qualities leta hai"
One class inherits properties and methods from another

🧠 Hinglish:
"Dog class Animal class se bolna, chalna seekh leta hai."


class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog barks 🐶");
  }
}

const dog = new Dog();
dog.speak(); // Animal speaks
dog.bark();  // Dog barks
4. Polymorphism – "Ek naam, alag kaam"
Same function name but different behavior in child classes

🧠 Hinglish:
"Bhai speak() function sabke paas hai, lekin Dog alag bolega, Cat alag."


class Animal {
  speak() {
    console.log("Animal sound");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow 🐱");
  }
}

class Cow extends Animal {
  speak() {
    console.log("Moo 🐮");
  }
}

const kitty = new Cat();
const gaay = new Cow();

kitty.speak(); // Meow 🐱
gaay.speak();  // Moo 🐮
🧱 Ways to Create Objects in JS
1. Object Literal

const student = {
  name: "Alok",
  greet() {
    console.log("Hi, I'm " + this.name);
  }
};
2. Constructor Function

function Student(name) {
  this.name = name;
  this.greet = function() {
    console.log("Hello, " + this.name);
  };
}
const s1 = new Student("Alok");
s1.greet(); // Hello, Alok
3. Using class (Modern Way)

class Student {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log("Hi, I’m " + this.name);
  }
}
const s2 = new Student("Kiran");
s2.greet(); // Hi, I’m Kiran
🔁 Summary Table (Easy Memory)
OOP Concept	Real-Life Analogy	Code Meaning
Encapsulation	Tiffin box with sabzi, roti, salad	Keep data + methods together
Abstraction	Remote control with only 3 buttons	Hide complex stuff, show useful part
Inheritance	Child looks like parent	Child class uses parent class code
Polymorphism	One word, many meanings (run, run fast)	Same method, different behavior

🧠 Hinglish Ek-Line Mein Yaad Rakhne Ke Liye
Encapsulation: Sab kuch ek dabbe mein

Abstraction: Jo kaam ka hai, wahi dikhana

Inheritance: Bache maa baap se seekhte hain

Polymorphism: Ek kaam, alag tareeke se

🧠 Final Analogy – Hero Example

class Hero {
  constructor(name) {
    this.name = name;
  }
  attack() {
    console.log(`${this.name} punches! 👊`);
  }
}

class SuperHero extends Hero {
  attack() {
    console.log(`${this.name} uses superpower! 💥`);
  }
}

const batman = new SuperHero("Batman");
batman.attack(); // Batman uses superpower!


*/
