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
    var miElemento = document.getElementById('contadorEstudiantes');
    if(vuelta && !userRecuperado && miElemento){
 
 if (estaVisible(miElemento)) {
   contadorAlHacerScroll();
   vuelta=false
 }
}
  });

  let formulario=document.getElementById('form')
  
  
  if(formulario){
    formulario.onsubmit=(event)=>{
        event.preventDefault()
            validarFormulario()
          }
  }

  

  function compararDatos(userIngresado,contraseñaIngresada){
    if(userIngresado=='agustina' && contraseñaIngresada=='123'){
        return(
'alumno'
            )
    }else if(userIngresado=='rodrigo' && contraseñaIngresada=='123'){
        return(
            'docente'
        )
    }
  }

  function validarFormulario(){
    let user=document.getElementById('user').value
    let contrasena=document.getElementById('contrasena').value
switch (compararDatos(user,contrasena)) {
    case 'alumno': 
    window.location.href = "pages/alumno.html?user="+ encodeURIComponent(user);
        break;
        case 'docente': 
        window.location.href = "pages/docente.html?user="+ encodeURIComponent(user);
        break;

    default:
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Usuario o contraseña incorrectas"
          });
        break;
}
  }

  function cambiarNombre(nombre){
   
    let login=document.getElementById('login')
    login.innerText=`¡Bienvenido/a ${userRecuperado}!`
  }


  let parametrosURL = new URLSearchParams(window.location.search);
  let userRecuperado = parametrosURL.get("user");
if(userRecuperado){
    cambiarNombre(userRecuperado)
}
let fechas=document.getElementById('fechas')
let proximasCharlas=document.getElementById('proximasCharlas')
if(proximasCharlas){
    proximasCharlas.addEventListener('change',()=>{
        switch (proximasCharlas.value) {
            case "1":
                fechas.innerHTML=`
                <div class="form-group">
                <h6>Fecha</h6>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="fecha" id="fecha1">
                <label class="form-check-label" for="fecha1">
                  11/11
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="fecha" id="fecha2" checked>
                <label class="form-check-label" for="fecha2">
                  12/11
                </label>
              </div>
            </div>
            <div class="form-group">
            <h6>Horario</h6>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="horario" id="horario1" checked>
                <label class="form-check-label" for="horario1">
                  15:00 - 17:00
                </label>
              </div>
              <div class="form-check">
              <input class="form-check-input" type="radio" name="horario" id="horario2" checked>
              <label class="form-check-label" for="horario2">
                19:00 - 21:00
              </label>
            </div>
           </div>
          `
                break;
                case "2":
                    fechas.innerHTML=`
                    <div class="form-group">
                    <h6>Fecha</h6>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="fecha" id="fecha1">
                    <label class="form-check-label" for="fecha1">
                      16/11
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="fecha" id="fecha2" checked>
                    <label class="form-check-label" for="fecha2">
                      18/11
                    </label>
                  </div>
                </div>
                <div class="form-group">
                <h6>Horario</h6>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="horario" id="horario1" checked>
                    <label class="form-check-label" for="horario1">
                      10:00 - 12:00
                    </label>
                  </div>
                  <div class="form-check">
                  <input class="form-check-input" type="radio" name="horario" id="horario2" checked>
                  <label class="form-check-label" for="horario2">
                    18:00 - 20:00
                  </label>
                </div>
               </div>
              `
                    break;


                    case "3":
                        fechas.innerHTML=`
                        <div class="form-group">
                        <h6>Fecha</h6>
                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="fecha" id="fecha1">
                        <label class="form-check-label" for="fecha1">
                          21/11
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="fecha" id="fecha2" checked>
                        <label class="form-check-label" for="fecha2">
                          22/11
                        </label>
                      </div>
                    </div>
                    <div class="form-group">
                    <h6>Horario</h6>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="horario" id="horario1" checked>
                        <label class="form-check-label" for="horario1">
                          18:00 - 20:00
                        </label>
                      </div>
                      <div class="form-check">
                      <input class="form-check-input" type="radio" name="horario" id="horario2" checked>
                      <label class="form-check-label" for="horario2">
                        20:00 - 22:00
                      </label>
                    </div>
                   </div>
                  `
                        break;       
        
            default:
                fechas.innerHTML=''
                break;
        }
    })
}

function nombreDeCharlaSeleccionada(numero){
switch (numero) {
    case '1':
        return('Introducción a la robotica')
        break;
        case '2':
        return('Desarrollo de inteligencia artificial')
        break;

    default:
        return('Tendencias futuras en robotica')
        break;
}
}
let formCharlas=document.getElementById('formCharlas')
let emailInputCharlas=document.getElementById('emailInputCharlas')
let exampleModal=document.getElementById('exampleModal')
if(formCharlas){
    formCharlas.addEventListener('submit',(event)=>{
event.preventDefault()
if(proximasCharlas.value=='0' || emailInputCharlas.value==''){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Faltan completar campos."
      });
}else{
    Swal.fire({
        icon: "success",
        title: "Cupo reservado",
        text: `${nombreDeCharlaSeleccionada(proximasCharlas.value)}`
      });
}
    })
}
  

