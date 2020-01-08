var cognome = prompt('Qual\'è il tuo cognome?');
console.log(cognome);

while (cognome.length <=0){
  cognome = prompt('Qual\'è il tuo cognome?');
}

var listaCognomi = ['Dybala', 'Ronaldo', 'Bonucci', 'Chiellini', 'Buffon','Del Piero'];
console.log(listaCognomi);

listaCognomi.push(cognome);
listaCognomi.sort();

for (var i = 0; i < listaCognomi.length; i++) {
  document.getElementById('squadra').innerHTML +=('<li>' + listaCognomi[i] + '</li>');
  console.log(listaCognomi[i]);
}
console.log(listaCognomi.indexOf(cognome));

var posizione = listaCognomi.indexOf(cognome);
document.getElementById('posizione_cognome').innerHTML = posizione;
