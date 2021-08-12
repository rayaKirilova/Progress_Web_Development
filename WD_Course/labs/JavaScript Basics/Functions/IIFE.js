// 3 ways of presenting function definition as expression:
var first = function(){
	console.log("first is defined and executed!")
}();

(function second(){
	console.log("Second is defined and executed!")
})();

(function third(){
	console.log("Third is defined and executed!")
}());