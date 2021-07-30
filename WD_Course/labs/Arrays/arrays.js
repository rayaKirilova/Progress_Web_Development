// array defiition
let fruits = ['apple', 'banana', 'strawberry'] ; 

let numbers = [1, 2, 3, 4, 5] ; 

let x = numbers[0] ; 
let y = numbers[1] ; 

console.log(x + y) ; 
console.log(fruits[1]) ; 

// length
console.log(fruits.length) ; 
console.log(numbers.length) ; 

// index of last element
let index = numbers.length - 1 ;
console.log(`The last element is ${numbers[index]} with index ${index}.`) ; 

// often mistakes - bugs!!
let arr = [2,4,6];
// вместо да направим проверка ние присвояваме стойност 0 на дължината на масива и по този начин трием елементите му!
if ( arr.length = 0 ){ 
    console.log( "Empty array!")
}
console.log( arr );
// []

// the right way is : 
let secondArray = [2,4,6];
if ( secondArray.length === 0 ){ 
    console.log( "Empty array!")
}
console.log( secondArray );
// [2, 4, 6]

// for loops on arrays

let days = ['Monday', 'Tuesday', 'Wednesday'] ; 
for (let i = 0; i < days.length ; i++){
    console.log(`The days is ${days[i]}`) ; 
}