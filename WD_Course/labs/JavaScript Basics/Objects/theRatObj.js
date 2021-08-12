// Дефинираме Right Angle Triangle (RAT) Object:
var RAT = {
    // ~~~ The Properties ~~~
    // за да бъде максимално опростен примера, задаваме точките чрез отделни координати, а не като масив:  p1 = [x, y]
    x1: 0, y1: 0,
    x2: 5, y2: 0,
    x3: 5, y3: 5,

    // ~~~ The Methods ~~~
    // Изчисляваме дължината на страна A:
    edgeA: function(){
      return this.x2 - this.x1;
    },
    // Изчисляваме дължината на страна B:
    edgeB: function(){
      return this.y3 - this.y2;
    },
    // Изчисляваме дължината на страна C:
    edgeC: function(){
      // Изполваме "Питагоровата формула" : C = sqrt(A*A + B*B)
      var res = Math.sqrt( this.edgeA() * this.edgeA() + this.edgeB() * this.edgeB() );

      /* Ако желаем резултата да бъде закръглен до втората цифра след десетичната запетая, а не знаем как => търсим си нужния метод, например в google чрез израза: "javascript round to decimal places method" и четем ... :-*/
      return res.toFixed(2);
    }
}

// Използваме RAT обекта:
console.log( "При зададен правоъгълен триъгълник с координати: [ [0, 0], [5, 0], [5, 5]  ]" );
console.log( "Дължината на страна A е", RAT.edgeA() );
console.log( "Дължината на страна B е", RAT.edgeB() );
console.log( "Дължината на страна C е", RAT.edgeC() );

