let students = ["Ivan", "Pesho", "Maria"];
let scores = [5, 4, 6];


// TASK: дефинирайте функция 'getHighestScoreIndex()', която да връща индекса на най-големият елемент от масива scores.

// ---> YOUR CODE HERE <---
let index = 0;
function getHighestScoreIndex() {
    let maxScore = scores[0];
    for (let i = 0; i < scores.length; i++) {
        if (maxScore <= scores[i]) {
            maxScore = scores[i];
            index = i;
        }
    }
    return index;
}
console.log(getHighestScoreIndex());

//getHighestScoreIndex() ; 
// TASK: като използвате функцията getHighestScoreIndex() изпишета в конзолата името на студента с най-висока оценка:

// ---> YOUR CODE HERE <---
let studentIndex = getHighestScoreIndex() ; 
let studentName = students[studentIndex] ; 
console.log(`${studentName} has the highest score: ${scores[studentIndex]}`) ; 
// expected output
// Maria has the higest score: 6


