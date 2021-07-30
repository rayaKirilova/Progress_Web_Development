var colors = ["blue", "purple", "red", "orange", "yellow", "green"];
var i = 0;

var boxNode = document.querySelector('#box');

function changeColor(sel) {
	boxNode.style.backgroundColor = colors[i++ % colors.length];
}