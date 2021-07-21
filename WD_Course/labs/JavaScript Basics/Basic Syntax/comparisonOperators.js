// Comparison operators
console.log(2 == 2) ; // true
console.log(2 == "2") ; // true
console.log(2 === 2) ; // true
console.log(2 === "2") ; // false 

// Boolean operands
console.log(true == 1) ; // true
console.log(false == 0) ; // true
console.log(true > false) ; // true

// lexicographic order, when both operands are strings
console.log( "2" > "19999" )  // true, as ("2" > "1") is true
console.log( "b" > "azzzz" )  // true, as ("b" > "a") is true