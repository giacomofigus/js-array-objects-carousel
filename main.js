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
const images_array = [
    'img-1.jpg',
    'img-2.jpg',
    'img-3.jpg',
    'img-4.jpg',
    'img-5.jpg',
];

let item_content = '';
let item_thumb = '';

for (let i = 0; i < images_array.length; i++) {
    item_content += `<div class="item"><img src="./img/${ images_array[i] }"></div>`;
    item_thumb += `<div class="thumb"><img src="./img/${ images_array[i] }"></div>`; 
};

const items_slider = document.querySelector('.item-slider').innerHTML = item_content;
const items_thumbnails = document.querySelector('.item-thumbnails').innerHTML = item_thumb;

const items = document.getElementsByClassName('item');
const circles = document.getElementsByClassName('circle');
const thumb = document.getElementsByClassName('thumb');
console.log(thumb);

let item_active = 0;

items[item_active].classList.add('active');
circles[item_active].classList.add('active');
thumb[item_active].classList.add('active');

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener ('click', function() {

    items[item_active].classList.remove('active');
    circles[item_active].classList.remove('active');
    thumb[item_active].classList.remove('active');

    if ( item_active === images_array.length-1 ) {
        item_active = 0;
    }
    else {
        item_active++;
    };

    items[item_active].classList.add('active');
    circles[item_active].classList.add('active');
    thumb[item_active].classList.add('active');
});

prev.addEventListener ('click', function() {

    items[item_active].classList.remove('active');
    circles[item_active].classList.remove('active');
    thumb[item_active].classList.remove('active');

    if ( item_active === 0 ) {
        item_active = images_array.length - 1;
    }
    else {
        item_active--;
    };

    items[item_active].classList.add('active');
    circles[item_active].classList.add('active');
    thumb[item_active].classList.add('active');
});

