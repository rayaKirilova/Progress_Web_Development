
let userTries = 3;

while (userTries > 0) {
    console.log(`Number of your current tries: ${userTries}`);
    userTries--;
}

// Machine Number 
// implement counter 
let counter = 0;
let machineNumber = Math.round(Math.random() * 10);
console.log(`Machine Number: ${machineNumber}`);

let userNumber = Math.round(Math.random() * 10);
console.log(`User Number: ${userNumber}`);

while (machineNumber !== userNumber) {
    userNumber = Math.round(Math.random() * 10);
    counter++;
    console.log(`New User Number: ${userNumber}`);
}
console.log(`Number of tries: ${counter}`);

// Break and Continue Operators
let number = 0;
for (i = 1; i <= 10; i++) {
    if (i === 3) {
        break;
    }
    // reasign the last value of i 
    number = i ;
}
console.log(`The Number is ${number}`) ;

// sum : 1 + 2 + 4 + 5 not including 3 => result 12
let sum = 0;

for (i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    // reasign the last value of i 
    sum += i ;
}
console.log(`The Number is ${sum}`) ;

