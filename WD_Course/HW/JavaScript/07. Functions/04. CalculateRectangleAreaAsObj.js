//TASK: да се дефинира функция calcRectangleArea(), която връща лицето на правоъгълник, със зададени като пропъртита на обект дължина и ширина:

// ---> YOUR CODE HERE <---

// TEST:
let rectangle = {
	width: 6,
	height: 3
};
function calcRectangleArea(){
    let width = rectangle.width ; 
    let height = rectangle.height ; 
    let area = width * height ; 

    return area ; 
}
let area = calcRectangleArea(rectangle);

console.log(`The area of rectangle is: ${area}`);

// expected result:
// The area of rectangle is: 18
