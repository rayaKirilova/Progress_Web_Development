let x = 42 ; 
let y = 10 ; 

(x % 2 === 0) && console.log(`X number is even`) ; 
(y % 2 === 0) && console.log(`Y number is even`) ; 

let z = 9 ; 
let q = 27 ; 

(z % 2 !== 0) && console.log(`Z number is odd`) ; 
(q % 2 !== 0) && console.log(`Q number is odd`) ; 

y = y || 1 ;
x = y || 1 ; 
console.log(y) ; // 10
console.log(x) ; // 10
