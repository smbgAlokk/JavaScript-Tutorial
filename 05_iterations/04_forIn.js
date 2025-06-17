// for in => Use for...in when you need to iterate over the properties of an object (keys), but avoid using it for arrays if the order of elements is important. Consider using for...of or Array.forEach() for arrays.

const myObject = {
  js: "Javascript",
  cpp: "C++",
  rb: " ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  console.log(`${key} shortcut fot ${myObject[key]}`);
}
/*
Output:

js shortcut fot Javascript
cpp shortcut fot C++
rb shortcut fot  ruby
swift shortcut fot swift by apple
*/

const programming = ["js", "rb", "py"];
for (const key in programming) {
  console.log(programming[key]);
}
/*
Output:

js
rb
py
*/

const map = new Map();
map.set("IN", "India");
map.set("Fr", "France");
map.set("UK", "United Kingdom");

for (const key in map) {
  console.log(key);
}

/*
Note:

'for in' => Used for Objects 
'for of' => Used for Arrays (mostly)
*/
