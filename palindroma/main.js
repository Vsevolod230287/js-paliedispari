// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

var parola = prompt("Dammi una parola: ");

function palindroma(word) {
  var string = "";

  for (i = word.length - 1; i >= 0; i--) {
    string += word[i];
  }
  console.log(string);

  if (word == string) {
    console.log("La parola " + word + " è Palindroma!");
  } else {
    console.log("La parola " + word + " non è Palindroma!");
  }

}

palindroma(parola);
