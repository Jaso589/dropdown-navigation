export default function dnwMenu(drop1, drop2, dwn1, dwn2){
const d = document;
d.querySelector(drop1).addEventListener('click', e =>{
    d.querySelector(dwn1).classList.toggle("is-active");
    
})
d.querySelector(drop2).addEventListener('click', e =>{
    d.querySelector(dwn2).classList.toggle('is-active');
})
}
/*
const dropdown1 = document.querySelector('.features'),
    dropdown2 = document.querySelector('.company'),
    dwn1 = document.querySelector('.dwn-1'),
    dwn2= document.querySelector('.dwn-2'),
    icon = document.querySelector('.prueba')

dropdown1.addEventListener('click', e =>{
    dwn1.classList.toggle("is-active");
    
})
dropdown2.addEventListener('click', e =>{
    dwn2.classList.toggle('is-active');
})*/