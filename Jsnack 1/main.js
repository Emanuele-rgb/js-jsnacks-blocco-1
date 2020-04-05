var parola1;

var parola2;


parola1 = (prompt('Inserisci prima parola'));
parola2 = (prompt('Inserisci seconda parola'));

var risultato = isLonger(parola1, parola2)


function isLonger(p1, p2) {
  var res = '';

  if (p1.length > p2.length) {
    res = p1;

  }
  else if (p1.length < p2.length) {
    res = p2;
  } else {
    res = 'Le parole sono uguali'
  }
  return res;
}

console.log(risultato);
