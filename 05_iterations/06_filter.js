/* const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach((item) => {
  console.log(item);
});

console.log(values);


Output:

js
ruby
java
python
cpp
undefined
*/

const MyNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const number = MyNums.filter((num) => {
  return num > 5;
});
// console.log(number);

const movies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.8,
    isAvailable: true,
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9.0,
    isAvailable: true,
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    genre: "Adventure",
    rating: 8.6,
    isAvailable: false,
  },
  {
    id: 4,
    title: "Parasite",
    year: 2019,
    genre: "Thriller",
    rating: 8.6,
    isAvailable: true,
  },
  {
    id: 5,
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "Drama",
    rating: 9.3,
    isAvailable: true,
  },
  {
    id: 6,
    title: "Avengers: Endgame",
    year: 2019,
    genre: "Superhero",
    rating: 8.4,
    isAvailable: false,
  },
  {
    id: 7,
    title: "La La Land",
    year: 2016,
    genre: "Musical",
    rating: 8.0,
    isAvailable: true,
  },
];

let analysis = movies.filter((num) => {
  return num.rating >= 9.0;
});
// console.log(analysis);

analysis = movies.filter((num) => {
  return num.year > 2000 && num.isAvailable === true;
});

console.log(analysis);
