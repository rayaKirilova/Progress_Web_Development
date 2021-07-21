let height = 1.70 ; 
let weight = 62 ; 

let bmi = weight / (height * height) ; 
console.log(`Your BMI is: ${bmi.toFixed(2)}.`) ; 

if (bmi < 16.0) {
    console.log(`Your category is Underweight (Severe thinness)`) ; 
} else if (bmi >= 16 && bmi < 17) {
    console.log(`Your category is Underweight (Moderate thinness)`) ; 
}  else if (bmi >= 17 && bmi < 18.5) {
    console.log(`Your category is Underweight (Mild thinness)`) ; 
} else if (bmi >= 18.5 && bmi < 25) {
    console.log(`Your category is Normal range`) ; 
} else if (bmi >= 25 && bmi < 30) {
    console.log(`Your category is Overweight (Pre-obese)`) ; 
} else if (bmi >= 30 && bmi < 35) {
    console.log(`Your category is Obese (Class I)`) ; 
} else if (bmi >= 35 && bmi < 40) {
    console.log(`Your category is Obese (Class II)`) ; 
} else if (bmi >= 40) {
    console.log(`Your category is Obese (Class III)`) ; 
}

