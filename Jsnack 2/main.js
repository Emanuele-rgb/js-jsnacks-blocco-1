
var numeroUtente = parseInt(prompt('Inserisci primo numero'));


if (isPari(numeroUtente) == 'pari') {
  console.log(numeroUtente)
}
else {
  console.log(numeroUtente + 1)
}


function isPari(numero) {
  if( numero % 2 === 0) {
    return 'pari';
  }
  else {
    return 'dispari';
  }
}
