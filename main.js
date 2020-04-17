// chiedere all'utente il suo nome
var nome_utente = prompt('Scrivi il tuo nome:');

// visualizzare output
document.getElementById('stampanome').innerHTML='Ecco il tuo nome: '+ nome_utente;

// chiedere all'utente il suo cognome
var cognome_utente = prompt('Scrivi il tuo cognome:');

// visualizzare output
document.getElementById('stampacognome').innerHTML='Ecco il tuo cognome: '+ cognome_utente;

// chiedere all'utente il suo colore preferito
var colore_preferito_utente = prompt('Scrivi il tuo colore preferito:');

// visualizzare output
document.getElementById('stampacolore').innerHTML='Ecco il tuo colore preferito: '+ colore_preferito_utente;

// anni 20
var anno = 20;

// visualizzare output
document.getElementById('stampaanno').innerHTML='Ecco la abbreviazione dell anno corrente: '+ anno;

// visualizzare output finale
document.getElementById('stampapassword').innerHTML='Ecco la tua insicurissima password: '+ nome_utente + cognome_utente + colore_preferito_utente + anno;
// document.writeln('Ecco la tua insicurissima password: ' + nome_utente + cognome_utente +     colore_preferito_utente + anni)



// var nome_utente_style ='<span> </span>'
