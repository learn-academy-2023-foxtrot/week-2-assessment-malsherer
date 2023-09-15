// ASSESSMENT 2: Coding Practical Questions with Jest

// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

// describe("divBy3", () => {
//     it("returns a message indicating whether a variable is divisible by three", () => {
//         expect(divBy3(15)).toEqual("15 is divisible by three")
//         expect(divBy3(0)).toEqual("0 is divisible by three")
//         expect(divBy3(-7)).toEqual("-7 is not divisible by three")
//     })
// })

// const object1 = { number: 15 }
// // Expected output: "15 is divisible by three"
// const object2 = { number: 0 }
// // Expected output: "0 is divisible by three"
// const object3 = { number: -7 }
// // Expected output: "-7 is not divisible by three"

// // b) Create the function that makes the test pass.

// Pseudo code:
// function name: divBy3
// input: numbers
// output: message indicated if the input variable is divisible by 3
// method: modulo operator to determine if values are divisible by 3, and string interpolation to insert the variable into the output message

// const divBy3 = (number) => {
//     if (number % 3 === 0) {
//         return `${number} is divisible by three`
//     } else if (number % 3 !== 0) {
//         return `${number} is not divisible by three`
//     }
// }

// console.log(divBy3(15))
// output: 15 is divisible by three

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// describe("wordCap", () => {
//     it("returns the same array with each word capitalized", () => {
//       expect(wordCap("randomNouns1")).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//       expect(wordCap("randomNouns2")).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
//     })
//   })

// b) Create the function that makes the test pass.

// Pseudo code:
// function name: wordCap
// input: arrays randomNouns1 and randomNouns2
// output: same arrays but with each word capitalized
// method: .map() to iterate through words in array, .toUpperCase built in method, .slice to separate first letter from rest of word, .toLowerCase to return only first letter as capitalized

// const wordCap(arr) {
//     return arr.map(word => {
//       const firstLetter = word.charAt(0).toUpperCase();
//       const rest = word.slice(1).toLowerCase();
  
//       return firstLetter + rest;
//     });
//   }

//   console.log(wordCap(randomNouns1))
//   output:[ 'Streetlamp', 'Potato', 'Teeth', 'Conclusion', 'Nephew' ]
// console.log(wordCap(randomNouns2))
// output: [ 'Temperature', 'Database', 'Chopsticks', 'Mango' ]

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("vowels1", () => {
    it ("takes in a string and returns the index of the first vowel", () =>
    {
        expect(vowels1(vowelTester1)).toEqual(1)
        expect(vowels1(vowelTester2)).toEqual(0)
        expect(vowels1(vowelTester3)).toEqual(2)
    })
})

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.

// Pseudo code:
// function name: vowel1
// input: strings
// output: number indicating the index position of the first vowel in the string
// process: for loop, .include method, string properties

const vowels1 = (number) => {
     for (let i = 0; i < number.length; i++){
          if ("aeiou".includes(number[i])){
               return(i)
          }
     }
}

