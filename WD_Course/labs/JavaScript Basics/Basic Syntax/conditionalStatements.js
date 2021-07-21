// Conditional 

let age = 13 ; 

if (age >= 18) {
    console.log(`adult`) ;
} else if (age > 12 && age < 18) {
    console.log(`teen`) ;
} else {
    console.log(`child`) ; 
}

// Ternary Operators
let x = 25 ; 
let numTypeX = x % 2=== 0 ? "even" : "odd" ; 
console.log(numTypeX) ; // odd

let y = 16 ; 
let numTypeY = y % 2=== 0 ? "even" : "odd" ; 
console.log(numTypeY) ; // even