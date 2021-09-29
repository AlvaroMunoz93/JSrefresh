//Spread operator to get item inside array

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 6, 7];

console.log(newNumbers); // print [1,2,3,4,6,7]

//works the same for objets

const person = {
  name: "Alvaro",
};

const newPerson = {
  ...person,
  age: 28,
};

console.log(newPerson); //print {name:"Alvaro",age:28}

//Rest operator, it's used in functions

const filter = (...args) => {
  return args.filter((el) => el === 1);
};

//by doing this we treated our parameters as an array, soy we can use array methods on args.

console.log(filter(1, 2, 3)); //print [1]
