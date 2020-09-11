let animacionInicio = document.querySelectorAll(".animacion2");
let animado = document.querySelectorAll(".animacion");

function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    
    for (var i =0; i<animado.length;i++){
        let alturaAnimado = animado[i].offsetTop;
        if((alturaAnimado - 700) < scrollTop){
            animado[i].style.opacity = 1;
            animacionInicio[i].style.opacity = 1;
        }
    }
}

function inicioAnimacion(){ 
    for (var i = 0; i<animacionInicio.length;i++){
        animacionInicio[i].style.opacity = 1;
    }
}

setTimeout(inicioAnimacion , 500)
window.addEventListener('scroll',mostrarScroll);