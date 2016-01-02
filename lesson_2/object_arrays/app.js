
var me = {
  firstName: "Jane",
  lastName: "Doe"
}

var friend = {
  firstName: "John",
  lastName: "Smith"
}

var mother = {
  firstName: "Amber",
  lastName: "Doe"
}

var father = {
  firstName: "Shane",
  lastName: "Doe"
}

function fullName(person) {
  console.log(person.firstName + " " + person.lastName);
}

people = [];
people.push(me);
people.push(friend);
people.push(mother);
people.push(father);

fullName(father);
console.log(people.length);

function rollCall(collection) {
  collection.forEach(fullName);
}

rollCall(people);