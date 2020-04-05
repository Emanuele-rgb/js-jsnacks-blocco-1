var nomi = ['Michele', 'Fabio', 'Roberto'];
var cognomi = ['Forghieri', 'Papagni', 'Marazzini'];

var nomiCognomi = [];

for (var i = 0; i < 5; i++) {
  var randomNameNumber = Math.floor(Math.random() * ((nomi.length - 1) - 0 + 1) + 0)
  var randomLastNameNumber = Math.floor(Math.random() * ((cognomi.length - 1) - 0 + 1) + 0)

  var newFullName = nomi[randomNameNumber] + ' ' + cognomi[randomLastNameNumber];

  nomiCognomi.push(newFullName);
}

console.log(nomiCognomi);
