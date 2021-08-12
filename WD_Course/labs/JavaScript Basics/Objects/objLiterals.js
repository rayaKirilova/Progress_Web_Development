var scientist1 = {
	firstName: "Ada",
	surName: "Byron",
	gender: "female",
	lived: [1815, 1852],
	profession: "mathematician",
	contribution: "implementation of the first ever algorithm, i.e. computer program",
	present: function() {
		var subjPronoun = this.gender == "female" ? "She" : "He";
		var objPronoun = this.gender == "female" ? "Her" : "His";

		var str = `${this.firstName} ${this.surName} was a great ${
			this.profession
		}. ${subjPronoun} was born in ${this.lived[0]}, and died in ${
			this.lived[1]
		}. ${objPronoun} main contribution was the <b>${this.contribution}</b>.
          `;

		console.log(str);
	}
};

var scientist2 = {
	firstName: "Ludwig",
	surName: "Wittgenstein",
	gender: "male",
	lived: [1889, 1951],
	profession: "mathematician and logician",
	contribution:
		"creation of picture theory of language, great ideas in philosophy of mathematics",
	present: function() {
		var subjPronoun = this.gender == "female" ? "She" : "He";
		var objPronoun = this.gender == "female" ? "Her" : "His";

		var str = `${this.firstName} ${this.surName} was a great ${
			this.profession
		}. ${subjPronoun} was born in ${this.lived[0]}, and died in ${
			this.lived[1]
		}. ${objPronoun} main contribution was the <b>${this.contribution}</b>.
          `;

		console.log(str);
	}
};

scientist1.present();
scientist2.present();
