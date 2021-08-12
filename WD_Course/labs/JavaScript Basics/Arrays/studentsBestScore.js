var students = [
    [
        'Pesho',
        ['math', 5],
        ['physics', 4],
        ['music', 6],
    ],
    [
        'Maria',
        ['math', 6],
        ['physics', 5],
        ['music', 5],
    ],
    [
        'George',
        ['math', 2],
        ['physics', 5],
        ['music', 4],
    ]
];


// Логваме оценките на всеки студент за всеки предмет:
let grade ; 
let discipline ;
let studentName ; 

let index = 0 ; 
let maxGrade = 0 ; 

for(var i = 0; i<students.length; i++){
   // console.log(`${students[i][0]} scores:`);

    studentName = students[i][0] ; 

    for(var j = 1; j<students[i].length; j++){

      //  console.log(`\t${students[i][j][1]} in ${students[i][j][0]}`);

        grade = students[i][j][1] ; 
        discipline = students[i][j][index] ; 

        if (grade >= maxGrade){
            maxGrade = grade ; 
        }
        
    }
    console.log(`${studentName} is best in ${discipline} (${maxGrade})`) ; 

}
// TASK: напишете кода, който да намира и изписва в конзолата най-високата оценка и съответния предмет за даден студент.		
// >>>>>>> your code starts here >>>>>>>



// <<<<<<< your code ends here <<<<<<<
// Очакван резултат: 
// Pesho is best in music (6)
// Maria is best in math (6)
// George is best in physics (4)