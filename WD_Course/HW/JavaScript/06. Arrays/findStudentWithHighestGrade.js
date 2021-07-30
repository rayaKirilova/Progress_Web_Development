// намиране на студент с най-висока оценка
// на всеки студент от масива studentsNames съответства
// оценка в масива grades:
var studentsNames = ["Петър", "Мария", "Стоян"];
var grades = [3, 5, 4];

var currentMax = 0;
var currentMaxIndex;

for (var i = 0; i < grades.length; i++) {
	if (grades[i] > currentMax) {
		currentMax = grades[i];
		currentMaxIndex = i;
	}
}

// console.log("currentMax=" + currentMax);
console.log(
	"Студента с най-висока оценка е " +
		studentsNames[currentMaxIndex] +
		" - " +
		grades[currentMaxIndex]
);

// Find the student with min grade

let index = 0 ; 
let minGrade = grades[0] ; 

for (j = 0 ; j < grades.length ; j++){

    if (minGrade >= grades[j]){
        minGrade = grades[j] ; 
        index = j ; 
    }
}
console.log(`Студентът с най-ниска оценка е ${studentsNames[index]} - ${minGrade}`) ; 
