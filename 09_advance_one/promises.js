/* 

💡 JavaScript mein Promise kya hota hai?
Promise ek aisa system hai jo aapko future mein result dene ka wada karta hai.

Jab aap koi aisa kaam karte ho jo turant complete nahi hota (jaise server se data laana), tab JavaScript use karta hai Promise.

📦 Real-life Example:
Aapne Zomato se pizza order kiya.

Aapne order diya 👉 new Promise()

Zomato ne bola: "Hum deliver karenge ya nahi — thoda time lagega" 👉 Pending state

Thodi der baad:

Agar pizza aa gaya 👉 resolve() (Success)

Agar kuch galat ho gaya (jaise rider cancel kar gaya) 👉 reject() (Error)

🔄 Teen State hoti hain:
Pending – Kaam ho raha hai

Fulfilled – Kaam ho gaya (success)

Rejected – Kaam fail ho gaya (error)

✍️ Hinglish Code Example:

let promise = new Promise(function (resolve, reject) {
  let pizzaBana = true;

  if (pizzaBana) {
    resolve("Pizza mil gaya!");
  } else {
    reject("Pizza nahi bana :(");
  }
});

promise
  .then(function (message) {
    console.log("Success:", message); // Jab resolve hota hai
  })
  .catch(function (error) {
    console.log("Error:", error); // Jab reject hota hai
  });
🔚 Summary (Hinglish):
Promise JavaScript ka ek future se result laane wala system hai.
Agar kaam sahi hua, to .then() chalega. Agar kaam fail hua, to .catch() chalega.


🔁 PROMISE SUMMARY (in 30 seconds)
Concept	Description
Promise	Something that may resolve or reject in future
.then()	Runs when promise is fulfilled
.catch()	Runs when promise is rejected
.finally()	Always runs (success or error)

🧠 Hinglish Summary (Permanent Yaad)
Promise: "Main kuch time baad bataunga result."

then: "Agar kaam ho gaya, toh yeh kar."

catch: "Agar fail ho gaya, toh yeh kar."

finally: "Jo bhi ho, end mein yeh kar."

🧠 Memory Hook:
🎬 "Imagine a waiter taking your order:
🧑‍🍳 Promise: I'll bring your food (maybe).
🍽️ Then: Here’s your food.
💥 Catch: Sorry sir, order cancel ho gaya.
🧹 Finally: Tip de do or go home."



*/

// Method - 1
const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("task completed 1");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise 1 resolved");
});

// Method - 2
new Promise((resolve, reject) => {
  setTimeout(function () {
    console.log("task completed 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise 2 resolved");
});

// Method - 3
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve({
      userName: "Alok",
      email: "contact.alokkumarr@gmail.com",
      job: "Engineer",
    });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

// Method - 4
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({
        userName: "ram",
        email: "contact.ramkumarr@gmail.com",
        job: "Manager",
      });
    } else {
      reject("Error 404!");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    return user.userName;
  })
  .then((userName) => {
    console.log(userName);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("This will executed it all cases");
  });

// Method - 5
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({
        userName: "Shyam",
        email: "contact.ramkumarr@gmail.com",
        job: "Manager",
      });
    } else {
      reject("Error 406!");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

consumePromiseFive();

// Method - 6
async function getAllUsers1() {
  try {
    const response = await fetch("https://api.github.com/users/smbgalokk");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

// getAllUsers1();

// Method - 7
fetch("https://api.github.com/users/smbgalokk")
  .then((responselelo) => {
    return responselelo.json();
  })
  .then((datalelo) => {
    console.log(datalelo);
  })
  .catch((errorlelo) => console.log(errorlelo));
