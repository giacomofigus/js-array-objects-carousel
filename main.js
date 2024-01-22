/*
    Consegna:
    Dato un array di oggetti letterali con:
        - url dell’immagine
        - titolo
        - descrizione
    Creare un carosello come nella foto allegata.

    Milestone 0:
    Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

    Milestone 1:
    Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
    Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

    Milestone 2:
    Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

    BONUS 1:
    Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.

    BONUS 2:
    Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

    BONUS 3:
    Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
*/
let arrowDown = document.getElementById("arrowDown")
let arrowUp = document.getElementById("arrowUp")

arrayImmagini = [
    {
        immagine: "./img/img-1.jpg",
        titolo: "Titolo molto lungo 1",
        paragrafo: "Lorem ipsum dolorem sit amet bla.",
    },
    {
        immagine: "./img/img-2.jpg",
        titolo: "Titolo molto lungo 2",
        paragrafo: "Lorem ipsum dolorem sit amet bla.",
    },
    {
        immagine: "./img/img-3.jpg",
        titolo: "Titolo molto lungo 3",
        paragrafo: "Lorem ipsum dolorem sit amet bla.",
    },
    {
        immagine: "./img/img-4.jpg",
        titolo: "Titolo molto lungo 4",
        paragrafo: "Lorem ipsum dolorem sit amet bla.",
    },
    {
        immagine: "./img/img-5.jpg",
        titolo: "Titolo molto lungo 5",
        paragrafo: "Lorem ipsum dolorem sit amet bla.",
    },

]

// al click dell'arrow down 
arrowDown.addEventListener('click', function(){
    
})