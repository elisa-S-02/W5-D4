// Il tuo compito è creare un sito e-commerce per Smartphones.
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto.
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio    OK
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio     OK
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo     OK
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente     OK
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio     OK
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)      OK

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
let apparizioniScomparizioni = function () {
  let titolo = document.querySelector("h1");
  // let titolo2 = document.querySelector("h1:nth-of-type(2)");
  titolo.innerText = "siamo un sito cinese...";
  //   titolo.classList.toggle( "h1OnClick") ;
};
apparizioniScomparizioni();

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
let backgroundColor = function (colore) {
  let color = document.querySelector("body");
  color.style.backgroundColor = colore;
};
backgroundColor("blueviolet");

// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
let titolo = document.querySelector("h5");
titolo.innerText = "via dei matti N°0";

// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
const a = document.querySelectorAll("a");
for (let i = 0; i < a.length; i++) {
  a[i].classList.add("paolo");
}

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
let images = document.querySelectorAll("img");
for (let i = 0; i < images.length; i++) {
  const element = images[i];
  element.style.visibility = "hidden";
}

// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata
const colorih = function () {
  const prezzo = document.querySelectorAll("span");
  for (let i = 0; i < prezzo.length; i++) {
    prezzo[i].style = `color: rgb(
        ${Math.round(Math.random() * 255)},
        ${Math.round(Math.random() * 255)},
        ${Math.round(Math.random() * 255)})`;
  }
};
colorih();
