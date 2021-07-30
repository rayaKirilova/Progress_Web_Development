let numArray = [-1, -2, -3, -4, -5, 0, 1, 2, 3, 4, 5];

console.log(`The negative odd  array elements are:`) ; 

for (i=0 ; i < numArray.length; i++){

    if (numArray[i] % 2 !== 0 && numArray[i] < 0){
        console.log(numArray[i]) ; 
    }
}