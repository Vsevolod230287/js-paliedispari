// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

var scelta = prompt("Scegli p:pari, d:dispari: ");
var numero = prompt("Scegli un numero da 1 a 5: ");

function cpuNumber() {
  var number = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  console.log("Lscelta del gioccatore e: " + scelta);
  console.log("Il tuo numero e: " + numero);
  console.log("Il numeo delcomputer e: " + number);
  return number;
}


function somma(num1, num2) {
  var risultato = (num1 + num2) % 2;
  if (risultato && scelta == "d") {
    console.log("Caro cioccatore hai vinto!")
  } else {
    console.log("Hai perso")
  }
}

somma(cpuNumber(), numero);
