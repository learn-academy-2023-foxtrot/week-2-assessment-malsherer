// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

// const cohort = "Foxtrot 2023"
// console.log(cohort.split(""))

// a) Your answer: An array will return with each individual character as a value
// b) Verify and explain: Correct. The .split() method separates a string into an array

// --------------------2) What will this log?

// const greeter = (name) => {
//   `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))

// a) Your answer: It will return a message that reads "Hello, LEARN Student!"
// b) Verify and explain: Incorrect. returned undefined. The function lacks a return.

// --------------------3) What will this log?

// const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: It will return an array of the values from the original array multiplied by 2
// b) Verify and explain: Correct. .map() method iterates through the array and performs the function on each value

// --------------------4) What will this log?

// const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: It will return an array containing [11, 13, 15]
// b) Verify and explain: Correct. .filter() method returns values that fit a certain parameter, and modulo 2 !== 0 is used to indicate that only odd numbers should be returned.

// --------------------5) What will this log?

// const myCodingSkills = {
//   languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub"
// }
// console.log(myCodingSkills.languages[0])

// a) Your answer: It will return the string "JavaScript"
// b) Verify and explain: Correct. The function searches the object myCodingSkills and returns the value at index position 0 in the key languages.

// --------------------STRETCH: What will this log?

// class Learn {
//   constructor(name) {
//     this.student = name
//     this.cohort = "Echo"
//     this.year = 2023
//   }
// }
// const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: It will return a new object "George" with the data keys cohort = Echo and year = 2023
// b) Verify and explain: output: Learn { student: 'George', cohort: 'Echo', year: 2023 }
// The function learnStudent added a new object to the class Learn.
