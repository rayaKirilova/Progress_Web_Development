// define alien objects constructor function:
function Alien( name, fingers ){
    this.name = name;
    this.fingers = fingers;
  }
  
  // create aliens
  var alien1 = new Alien( 'Alf', 8 );
  var alien2 = new Alien( 'Zx42', 4 );
  
  // change alian2 fingers:
  alien2.fingers = 12;
  
  console.dir( alien2 );
  console.dir( alien1 );