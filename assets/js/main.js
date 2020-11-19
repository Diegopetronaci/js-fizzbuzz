// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?


// Scrivi un programma che stampi i numeri da 1 a 100,



for (var i = 0; i < 101; i++) {

  if ((i%3 == 0) && (i%5 == 0)){
    console.log("FizzBuzz");

  } else if (i%5 == 0){
    console.log("Buzz");

  } else if (i%3 == 0) {
    console.log("Fizz");

  } else {
    console.log(i);
  }

}

  // if ((x == 3) && (y == 4)) {
  //   // Questo blocco viene eseguito
  //   // solo se x è uguale a 3 e Y uguale a 4
  //   alert("X == 3 e Y == 4");
  // }
