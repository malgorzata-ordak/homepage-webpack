
import moment from 'moment';

console.log(moment().startOf('day').fromNow());

import '../scss/main.scss';
import '../js/script.js';

fetch("https://api.github.com/users/malgorzata-ordak/repos")
.then(resp => resp.json())
.then(resp => {
    
for (let repo of resp) {
    const {name, html_url} = repo;
    const listaRepo = document.querySelector('.lista--js');
    const szablon = `<li>
    ${name} <a href="${html_url}" title="link do repozytorium ${name} na Githube">link do githuba</a>
    </li>`;

    listaRepo.innerHTML += szablon;

    // console.log (`${name} ${html_url}`)
}
})
.catch(error => {
    console.log('nie udało się pobrać');
})



const hamburger = document.querySelector('.hamburger--js');
hamburger.addEventListener('click', ()=> {
    const nav = document.querySelector('.nawigacja--js');

    console.log(nav);
    nav.classList.toggle('nawigacja--open');
})


const firstName = "Gosia";
const age = 31;

alert ('Cześć! :) Miło Cię widzieć');

console.log( `Siemanko, Siemanko! Witaj na mojej stronie. Prawda, że świetna? :D Jestem ${firstName} i mam ${age} lat`);


const pustyParagraf = document.querySelector('.pomysł__opis--js');
pustyParagraf.innerHTML = `Ten element został stworzony i uzupełniony za pomocą JS. Jestem z tego bardzo dumna :)`;


function greet (firstName, age) {
    console.log (
        `Witaj drogi Gościu. Nazywam się ${firstName} i mam ${age} lat`);
}

greet(firstName, age);

const greetTwo = (firstName, age) => {
console.log (
    `Witaj witaj drogi Gościu. Mam na imię ${firstName} i mam ${age} lat`);

}

greetTwo('Gosia', '31');


const button = document.querySelector('.action--js');
console.log(button)
 
const myClick = () => {
const h1 = document.querySelector('.malinowy__h1--js');
h1.innerHTML = `Siemanko, Siemanko! Witaj na mojej stronie. Prawda, że świetna? :D`;
h1.classList.toggle( 'klasa-z-js');

}

 button.addEventListener('click', myClick);

 const startOfDay= moment().startOf('day').fromNow();
 const timePlaceholder = document.querySelector('.time--js');
 timePlaceholder.innerHTML= startOfDay;