var cognome = prompt('Qual è il tuo cognome?');
console.log(cognome);

while (cognome.length <=0){
  cognome = prompt('Qual è il tuo cognome?');
}

var listaCognomi = ['Dybala', 'Ronaldo', 'Bonucci', 'Chiellini', 'Buffon','Del Piero'];
console.log(listaCognomi);

// var cognome = cognome.toLowerCase();
// cognome = cognome + charAt(0).toUpperCase() + cognome.slice(1);
listaCognomi.push(cognome);
listaCognomi.sort();

for (var i = 0; i < listaCognomi.length; i++) {
  document.getElementById('squadra').innerHTML +=('<li>' + listaCognomi[i] + '</li>');
  console.log(listaCognomi[i]);
}
console.log(listaCognomi.indexOf(cognome));

var posizione = listaCognomi.indexOf(cognome) + 1;
document.getElementById('posizione_cognome').innerHTML = posizione;
