// конструктор за обекти от тип Scientist. Данните за всеки учен ще се подават като обект, за да бъде ясно коя информация за какво се отнася. Освен това, няма да бъде необходимо при създаването на обекта да се следи за реда, в който подаваме аргументите.	
var Scientist = function( params ){
	this.firstName = params.firstName;
	this.surName = params.surName;
	this.bornIn = params.bornIn;
	this.lived = params.lived;
	this.profession = params.profession;
	this.contribution = params.contribution;

	// макар и написана само веднъж, функция създадена тук, ще се копира в паметта
  // толкова пъти, колкото обекти създадем, което не е ефективно при
  // по-големи приложения. По-ефективня вариант е даден тук: https://codepen.io/webdesigncourse/pen/bLadmQ
	this.calcLive = function(){
			return this.lived[1] - this.lived[0]
	};

	this.present = function(){				
		console.log(`I'm ${this.firstName} ${this.surName} - a famous ${this.profession}. I was born in ${this.bornIn.town}, ${this.bornIn.country}. I lived for ${this.calcLive()} years. My main contribution was ${this.contribution}!`);
	};
}


// създаваме обектите от тип Scientist:
var scientist1 = new Scientist({
	"firstName":"Ada", 
	"surName":"Byron", 
	"bornIn":{
		"country":"United Kingdom",
		"town":"London"
	},
	"lived":[1815, 1852],
	"profession":"mathematician",
	"contribution":"implementation of first ever algorithm, i.e. a computer program"
});

var scientist2 = new Scientist({
	"firstName":"Ludwig", 
	"surName":"Wittgenstein", 
	"bornIn":{
		"country": "Austria",
		"town": "Vienna"
	},
	"lived":[1889, 1951],
	"profession":"philosopher and logician",
	"contribution":"creation of the picture theory of language, great ideas in philosophy of mathematics",
});


// вече можем да използваме нашите обекти:
scientist1.present();
scientist2.present();