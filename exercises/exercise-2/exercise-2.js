let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];

//Task 1
// function getName(arr) {
//   arr
//     .filter((item) => item.house === "Gryffindor")
//     .forEach((item) => console.log(item.firstName + " " + item.lastName));
// }
// getName(hogwarts);

hogwarts.filter((person) => {
  if (person.house === "Gryffindor") {
    let { firstName, lastName } = person;
    console.log(firstName + " " + lastName);
  }
});

//Task 2
// function getName(arr) {
//   arr
//     .filter((item) => item.pet !== null && item.occupation === "Teacher")
//     .forEach((item) => console.log(item.firstName + " " + item.lastName));
// }
// getName(hogwarts);

hogwarts.filter((person) => {
  if (person.pet !== null && person.occupation === "Teacher") {
    let { firstName, lastName } = person;
    console.log(firstName + " " + lastName);
  }
});


