// alert('ciao')

// Chiedi all’utente il cognome,

var cognome = prompt('Qual\'è il tuo cognome?');
console.log(cognome);
// inseriscilo in un array con altri cognomi,
var listaCognomi = ['Dybala', 'Ronaldo', 'Bonucci', 'Chiellini', 'Buffon','Del Piero'];
console.log(listaCognomi);

listaCognomi.push(cognome);
console.log(listaCognomi);

// stampa la lista ordinata alfabeticamente (in html ul > li).
listaCognomi.sort();
console.log(listaCognomi);
// Scrivi anche la posizione della lista in cui il nuovo utente si trova.


for (var i = 0; i < listaCognomi.length; i++) {
  console.log(listaCognomi[i]);
}
