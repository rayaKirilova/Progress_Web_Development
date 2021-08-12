console.log("********** Пример 1 **********");
// bar() се декларира по време на компилация
function bar() {
    return 1;
}

console.log("bar returns", bar());

// bar() се декларира повторно, по време на компилация:
function bar() {
    return 2;
}
// Действията които се извършват са:
// 1.  var bar = function() {return 1};  (compile time)
// 2.  var bar = function() {return 2};  (compile time)
// 3.  console.log("bar returns", bar()) (run time);


console.log("********** Пример 2 **********");
// bar() се декларира по време на компилация, но стойността й се присвоява при изпълнението на програмата:
var bar = function() {
    return 1;
}

console.log("bar returns", bar());

var bar = function() {
    return 2;
};

// Действията които се извършват са:
// 1.  var bar = undefined 					(compile time)
// 2.  bar = function() {return 1}; 		(runtime)
// 3.  console.log("bar returns", bar());	(runtime);
// 3.  bar = function() {return 2}; 		(runtime)


console.log("********** Пример 3 **********");
// BAD PRACTICE !!!
var a = function bar() {
    return 3;
}
console.log("bar returns", bar());
console.log("a returns", a());