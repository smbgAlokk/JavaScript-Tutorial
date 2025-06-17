const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach(function (val) {
  //   console.log(val);
});
// Above one is callback function

// lets try with arrow function
// Arrow function is a shorthand of callback function

coding.forEach((val) => {
  //   console.log(val);
});

function printMe(val) {
  //   console.log(val);
}

coding.forEach(printMe);

coding.forEach((val, index, arr) => {
  console.log(val, index, arr);
});

/*
Output:

js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ] 
*/

const MyCoding = [
  {
    LanguageName: "Javascript",
    FileName: "JS",
  },
  {
    LanguageName: "Java",
    FileName: "Java",
  },
  {
    LanguageName: "Python",
    FileName: "PY",
  },
];

MyCoding.forEach((item) => {
  console.log(
    `LanguageName :- ${item.LanguageName} and FileName :- ${item.FileName}`
  );
});
