// TASK: Да се дефинира функция SumEven2DimArrayElements(), която връща сумата от четните елементи на подаденият й двумерен масив.

// ---> YOUR CODE HERE <---

// TEST:
let arr = [
    [1, 2, 3],
    [4, 5, 6]
];

function SumEven2DimArrayElements() {
    let sumEvenElements = 0;
    for (let i = 0; i < arr.length; i++) {
        let arrayElement = arr[i];
        for (let j = 0; j < arrayElement.length; j++) {
            let element = arrayElement[j];

            if (element % 2 === 0) {
                sumEvenElements += element;
            }
        }
    }
    return sumEvenElements;
}

let sum = SumEven2DimArrayElements(arr);
console.log(sum);

// expected output: 12
