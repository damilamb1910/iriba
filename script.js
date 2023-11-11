function contadorAlHacerScroll(){
let elementoContadorEstudiantes= document.getElementById('contadorEstudiantes')
let contadorEstudiantes = 0;
const estudiantes = 198; 
let elementoContadorGraduados= document.getElementById('contadorGraduados')
let contadorGraduados = 0;
const graduados = 435; 
let elementoContadorConvenios= document.getElementById('contadorConvenios')
let contadorConvenios = 0;
const convenios = 112; 
let elementoContadorDocentes= document.getElementById('contadorDocentes')
let contadorDocentes = 0;
const docentes = 78; 
const posicionContador = elementoContadorEstudiantes.getBoundingClientRect().top;
const windowHeight = window.innerHeight;
        

if (posicionContador < windowHeight) {
const actualizarContadorEstudiantes = setInterval(() => {
            if (contadorEstudiantes <= estudiantes) {
                elementoContadorEstudiantes.textContent = contadorEstudiantes;
                contadorEstudiantes++;
            } else {
                clearInterval(actualizarContadorEstudiantes);
            }
        }, 20); 

const actualizarContadorGraduados = setInterval(() => {
            if (contadorGraduados <= graduados) {
                elementoContadorGraduados.textContent = contadorGraduados;
                contadorGraduados++;
            } else {
                clearInterval(actualizarContadorGraduados);
            }
        }, 9); 

const actualizarContadorConvenios = setInterval(() => {
            if (contadorConvenios <= convenios) {
                elementoContadorConvenios.textContent = contadorConvenios;
                contadorConvenios++;
            } else {
                clearInterval(actualizarContadorConvenios);
            }
        }, 30); 

        const actualizarContadorDocentes = setInterval(() => {
            if (contadorDocentes <= docentes) {
                elementoContadorDocentes.textContent = contadorDocentes;
                contadorDocentes++;
            } else {
                clearInterval(actualizarContadorDocentes);
            }
        }, 35); 
    }   
}
function estaVisible(elemento) {
    var dimensiones = elemento.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
    return (
      dimensiones.top >= 0 &&
      dimensiones.left >= 0 &&
      dimensiones.bottom <= windowHeight &&
      dimensiones.right <= windowWidth
    );
  }
  let vuelta=true
  window.addEventListener('scroll', function() {
    
    if(vuelta){
 var miElemento = document.getElementById('contadorEstudiantes'); 
 if (estaVisible(miElemento)) {
   contadorAlHacerScroll();
   vuelta=false
 }
}
  });

  