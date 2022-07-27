const fs = require('fs');

const genders = ['male', 'female'];
const maleNames = ['Dawid', 'Dominik', 'Piot', 'Pawel', 'Adam', 'Przemyslaw', 'Jakub'];
const femaleNames = ['Wiktoria', 'Alicja', 'Paulina', 'Justyma', 'Aleksandra', 'Patrycja', 'Karolina'];
const lastNames = ['Holmes', 'Reed', 'Hunt', 'Duncan', 'Singh', 'Gardiner', 'Nelson', 'Hanson'];

const randChoice = function (arr) {
     const result = arr[Math.floor(Math.random() * arr.length)];
     return result;
}

const people = [];

for (let i = 0; i <= 20; i++){
     const person = {};

     person.gender = randChoice(genders);
     if (person.gender === 'male') person.name = randChoice(maleNames);
     if (person.gender === 'female') person.name = randChoice(femaleNames);
     person.lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
     person.age = Math.floor(Math.random() * (78 - 18 ) + 18);

     people.push(person)
}

const data = JSON.stringify(people)

fs.writeFile('people.json', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

console.log('people', people);