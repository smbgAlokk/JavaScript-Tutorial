/*

📦 What is fetch()?
fetch() is a built-in JavaScript function used to get data from a server or API — like a digital waiter bringing your food from the kitchen 🍽️.

🧠 Real-Life Analogy: Ordering from a Website
Imagine you open Zomato, click on “Paneer Tikka”, and the app fetches that dish’s data from the restaurant’s kitchen (server).


fetch("https://api.zomato.com/paneer-tikka")
That's it. Just like ordering food — but with data.

🛠 Basic Syntax of fetch()

fetch("https://api.example.com/data")
  .then(response => response.json())   // 📦 unpack the box
  .then(data => console.log(data))     // 🎉 use the data
  .catch(error => console.log("Error:", error)); // ❌ handle error
🧱 What's Happening?
Let’s break it down like a true friend:

Line	What it does	Hinglish
fetch(url)	Sends request to server	"Bhai, mujhe data chahiye"
.then(response => response.json())	Converts raw response to JSON	"Jo mila usko samajhne layak banao"
.then(data => ...)	Uses the actual data	"Ab kaam karo data ke sath"
.catch(err => ...)	Catches errors	"Agar kuch gadbad ho gayi toh sambhalo"

🍽️ Example: Getting a Joke from a Joke API

fetch("https://official-joke-api.appspot.com/random_joke")
  .then(response => response.json())
  .then(joke => {
    console.log("😂 Joke:", joke.setup);
    console.log("👉 Punchline:", joke.punchline);
  })
  .catch(error => console.log("😢 Error fetching joke:", error));
🤔 Why Use fetch()?
Because data lives on the internet, not in your JS file. fetch() brings it to you.

📬 Just like calling Zomato for food:

You place a request (fetch)

They reply (response)

You open the package (response.json)

You enjoy the meal (data)

Handle delivery issues (catch errors)

🔐 What if You Want to Send Data? (POST)
Imagine you're filling a contact form and clicking "Submit".


fetch("https://api.example.com/contact", {
  method: "POST", // 👈 you're sending data now
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Alok",
    message: "Hello from India 👋"
  })
})
  .then(res => res.json())
  .then(data => console.log("✅ Submitted:", data))
  .catch(err => console.log("❌ Error:", err));
🚦 What All Can You Do with fetch()?
Action	How
GET data	default: fetch(url)
POST data	use method + body
PUT / PATCH	update existing data
DELETE	remove data

🧠 Hinglish Summary (Permanent Yaad):
fetch(): "Server se baat karna — 'bhai data bhej' 📞"

response.json(): "Jo aaya, usko padne laayak banao 📦➡️📄"

.then(): "Kaam karo data milne ke baad ✅"

.catch(): "Agar kuch ulta-pulta ho gaya, sambhalo ❌"

🧠 Memory Hook:
👨‍🍳 You're a chef building a recipe website.

You use fetch() to get ingredients 🍅🧂

.then() to cook it 👨‍🍳

.catch() to handle kitchen fire 🔥


💬 Want to Use with async/await? Even Cleaner!

async function getJoke() {
  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const joke = await response.json();
    console.log("😂", joke.setup);
    console.log("👉", joke.punchline);
  } catch (error) {
    console.log("❌", error);
  }
}
🧠 Hinglish:

await: "Ruko zara… sabar karo"

try/catch: "Koshish karo, gadbad ho toh sambhal lo"

🚀 Final Comparison:
Tool	Role	                 Real-Life Analogy
fetch()	Make request to server   Call Zomato for food
then()	Handle success	         Pizza delivered
catch()	Handle failure	         Pizza delayed/canceled
await	Wait for result	         Thoda ruk ja, abhi aata hai


*/
