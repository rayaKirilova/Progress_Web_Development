// TASK: да се дефинира функцията findMaxEven(), която да връща максималното четно число от подаденият й масив.

// ---> YOUR CODE HERE <---
//let array = [2, -4, 5, 3, 9, 0, 1];
let array = [2, 5, 10, 8, 90, 100, -3];

function findMaxEven(){
    let max = array[0] ; 
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0){
            if (max <= array[i]){
                max = array[i] ; 
            }
        }
    }
    return max ;   
}

// TEST
//let numbers = [2, -4, 5, 3, 9, 0, 1];
let max = findMaxEven(array);
console.log(`The max of [${array}] is ${max}`);
