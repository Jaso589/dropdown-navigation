import hamburgerMenu from "./hamburguer.js";
import dnwMenu from "./menu-dwn.js";
import prueba from "./pruebas.js";


const d = document;
d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".panel-btn",".nav-items", "ul a",'.features','.company', '.header')
    dnwMenu('.features', '.company', '.dwn-1', '.dwn-2')
    prueba('.prueba', '.cajita')
})

d.addEventListener('keydown',(e)=>{
    moveBall(e,".ball",".stage")
})
