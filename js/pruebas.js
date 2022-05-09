export default function prueba (prob, cajita) {

    document.addEventListener('click', e =>{
        if(e.target.matches(prob)){
            document.querySelector(cajita).classList.toggle('dwnprob')
        }
    })
}