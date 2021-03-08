// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

var parola = prompt("Dammi una parola: ");

function palindroma(word) {
  var str;
  for (i = word.length; i >= 0; i--) {
    str += word[i];
  }
   console.log(str);
  if(word == str) {
    console.log('La parola ' + word + ' è Palindroma!');
  } else {
    console.log("La parola " + word + " non è Palindroma!");
  }

}

palindroma(parola);
