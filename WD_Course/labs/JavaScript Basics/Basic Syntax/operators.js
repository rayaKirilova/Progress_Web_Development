// Addition
let x = 100 ; 
let y = 200 ; 
let result = x + y ; 
console.log(result) ; 

// Subtraction
let a = 500 ; 
let b = 200 ; 
let diff = a - b ; 
console.log(diff) ; 

// Multiplication
let z = 20 ;
console.log(z * z) ; 
console.log(30 * -3) ; 

// Division
let p = 50 ; 
console.log(p / 10) ; 
console.log(30 / -3) ; 

// Modulo Operation 
console.log(` ${4 % 2} => Remainder is 0 => the number is even`) ; 
console.log(` ${5 % 2} => Remainder is not 0 => the number is odd`) ; 

// Exponentiation
console.log(2 ** 3) ;
console.log(2 * 2 * 2) ; 
console.log(Math.pow(2, 3)) ; 

// Increment and Decrement 
// prefix ++i
// postfix i++

let i = 2 ; 
console.log(i++) ; // 2
console.log(i) ; // 3
console.log(++i) ; // 4

let num = 2 ; 
console.log(num + i) ; // 6
console.log(num + ++i) ; // 7

console.log(i) ; // 5 - !line 39 

console.log(num + i++) ; // 7

console.log(i) ; // 6 

let q = 5 ; 
console.log(q--); // 5
console.log(q); // 4
console.log(--q); // 3

let n = 10 ; 
console.log(n - q) ; // 7
console.log(n - --q) ; // 8
console.log(q) ; // 2
console.log(n - q--) ; // 8

// Math object
console.log(Math.pow(3, 3)) ; 
console.log(Math.round(3.7895)) ; 
console.log(Math.min(3, 3, 5, 10, 19, 55)) ; 
console.log(Math.max(3, 3, 5, 10, 19, 55)) ;

// String Interpolaion and Type Coercion
let userName = "qwerty" ; 
let email = "qwerty@abv.bg"
let userData = userName + " => " + email ; 
console.log(userData) ; 

let age = 23 ; 
console.log(userName + age) ; // qwerty23 

let sum = '100' ; 
console.log(sum + age) ; // 10023
console.log(sum * 1 + age) ; // 123

// Assignment Operator

let firstNum, secondNum ; 
firstNum = 10.5 ; 
secondNum = firstNum++ ; // 11.5

console.log(`Second number is ${secondNum}`) ;
console.log(`First number is ${firstNum}`) ;















