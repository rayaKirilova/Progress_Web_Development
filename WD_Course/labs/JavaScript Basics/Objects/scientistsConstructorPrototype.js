var Scientist = function( params ){
	this.firstName = params.firstName;
	this.surName = params.surName;
	this.bornIn = params.bornIn;
	this.lived = params.lived;
	this.profession = params.profession;
	this.contribution = params.contribution;
}

// Създадена по този начин, функцията се копира в паметта един единствен път, без значение колко
// обекта ще генерираме. Всеки обект има достъп до нея чрез механизмът на
// наследяване в JavaScript, който се разглежда детайлно в Advanced JavaScript курса.
Scientist.prototype.calcLiveDuration = function(){
	return this.lived[1] - this.lived[0]
};
Scientist.prototype.present = function(){				
	console.log(`I'm ${this.firstName} ${this.surName} - a famous ${this.profession}. I was born in ${this.bornIn.town}, ${this.bornIn.country}. I lived for ${this.calcLiveDuration()} years. My main contribution was ${this.contribution}!`);
};


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