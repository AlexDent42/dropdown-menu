let card = document.querySelector('.card');
let cardtoggle = document.querySelector('.toggle');

cardtoggle.addEventListener('click', ()=>{
    card.classList.toggle('active');
})