export default function hamburgerMenu(panelBtn,panel,menuLink, feat, comp, fondo) {
    
    const d = document;
    d.addEventListener('click',e=>{
        if(e.target.matches(panelBtn)||e.target.matches(`${panelBtn} *`)){
            d.querySelector(panel).classList.toggle("dnwprob");
            d.querySelector(panelBtn).classList.toggle("is-active");
            
            d.querySelector(fondo).classList.toggle("fondoOpaco");
        }
        if(e.target.matches(menuLink)){
            if(e.target.matches(feat) !== '.features'){
                
            d.querySelector(panel).classList.remove("dnwprob");
            d.querySelector(panelBtn).classList.remove("is-active");
            d.querySelector(fondo).classList.remove("fondoOpaco");
            }else{
                d.querySelector(panel).classList.add("dnwprob");
                d.querySelector(panelBtn).classList.add("is-active");
                d.querySelector(fondo).classList.add("fondoOpaco");
            }
        }
    })

   
}