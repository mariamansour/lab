// Topic 1: Declaring variables
// ES5


// ES6


// Topic 2: Data types (6 primitives + object)
// 1. number

// The number type represents both integer and floating point numbers.

// There are many operations for numbers, e.g. multiplication *, division /, addition +, subtraction -, and so on.

// Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.
// Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number. We can get it as a result of division by zero:

// 2. boolean

// The boolean type has only two values: true and false.
// This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.

// Booleans can also be the output of a comparison.


// 3. string 

// In JavaScript, there are 3 types of quotes.

// Double quotes: "Hello".
// Single quotes: 'Hello'.
// Backticks: `Hello`.
// Double and single quotes are “simple” quotes. There’s no difference between them in JavaScript.

// Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}
var name = "Melanie";
`Hello, ${name}!`

// 4. undefined
// The meaning of undefined is “value is not assigned”.
// If a variable is declared, but not assigned, then its value is undefined

// 5. null
// In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.
// It’s just a special value which represents “nothing”, “empty” or “value unknown”.

// 6. symbol

// 7. object
// The object type is special.

// All other types are called “primitive” because their values can contain only a single thing 
// (be it a string or a number, etc). 
// In contrast, objects are used to store collections of data and more complex entities. 


// Source: https://javascript.info/types

// Function declaration
function subDec (num1, num2) {
	return num1 - num2;
}

// Function expression
var subEx = function (num1, num2) {
	return num1 - num2;
}

console.log(subDec(5,10));

// Write addition function using declaration

// Write multiplication function using expression

// For more info: https://gomakethings.com/function-expressions-vs-function-declarations/

// Collaborative function writing for randomizing seating