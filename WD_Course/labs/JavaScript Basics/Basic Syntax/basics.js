// variable declarations
let number ; // undefined
console.log(typeof number);

number = 42 ; 
console.log(`The number is: ${number}`);

//document.body.style.backgroundColor = '#ADD5DD' ; 

let a = 5 ; 
let b = 10 ; 
let result = a + b ; 
console.log(result) ; 

// strict mode 
'use strict' ;
let x = 23 ; 
console.log(x) ; 

// Primitve Types 
// type: number 
let positiveNumber = 10 ; // integer
let negativeNumber = -33 ; 
let realNumber = 3.14 ; // float number

//type: string
let userFirstName = 'Ivan' ; 
let userLastName = 'Ivanov' ; 

let userFullName = userFirstName + " " + userLastName ; 
// backticks => template string 
let userFullNameBackticks = `${userFirstName} ${userLastName}` ;

console.log(userFullName) ; 
console.log(userFullNameBackticks) ; 

let firstValue = 10 ; 
let secondValue = 25 ; 
console.log(`Result: ${firstValue} + ${secondValue} = ${firstValue + secondValue}`) ; 

console.log(typeof firstValue) ; 
console.log(typeof secondValue) ; 

console.log(typeof userFullName) ; 

console.log(typeof undefined) ; 
console.log(typeof null) ;  // Null is type object which is bug in Js
console.log(typeof NaN) ; 

// NaN example 
console.log("Raya" * 7) ; 


