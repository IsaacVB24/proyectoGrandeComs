/*
    background-color: #cae8ca;
    border: 2px solid #3d863f;

    Respuesta incorrecta
    background-color: #e8caca;
    border: 2px solid #863d3d;
*/


function respCorrecta(){
    document.getElementById("mensaje").innerHTML = "¡Felicidades! Respuesta correcta, ya casi acabas.";
    document.getElementById("mensaje").style.backgroundColor = "#cae8ca";
    document.getElementById("mensaje").style.border = "2px solid #3d863f";
    $("#mensaje").fadeIn(1000);
    $("#mensaje").fadeOut(10000);
    return;
}
function respIncorrecta(){            
    document.getElementById("mensaje").innerHTML = "¡Intente de nuevo! Respuesta incorrecta.";
    document.getElementById("mensaje").style.backgroundColor = "#e8caca";
    document.getElementById("mensaje").style.border = "2px solid #863d3d";
    $("#mensaje").fadeIn(1000);
    $("#mensaje").fadeOut(10000);
    return;
}

function respCorrectaNuevaReunion(){
    respCorrecta();
    let id = "fondoNuevaReunion";
    document.getElementById("contenidoZoom").setAttribute('id', 'fondoNuevaReunion');
    document.getElementById("fondoNuevaReunion").innerHTML = "<div class='encabezadoLlamada'><div><a onclick='cancelar()'><p id='cancelar'>Cancelar</p></a><p>Iniciar una reunión</p></div></div><br><br><div><table class='tablaNuevaReunion'><tr class='fila'><th><p>Video activado</p></th><td><label class='switch'><input type='checkbox' checked><span class='slider round' style='border: 1px solid black;'></span></label></td></tr><tr><th class='fila'><p>Usar ID personal de la reunión (PMI)</p></th><td><label class='switch'><input type='checkbox'><span class='slider round' style='border: 1px solid black;'></span></label></td></tr></table></div><div><button class='iniciarReunion' onclick='quizCompletado(" + id + ")'>Iniciar una reunión</button></div>";
    return;
}
function cancelar(){
    document.getElementById("fondoNuevaReunion").innerHTML = "<div class='encabezado'><div><p>Reunión y Chat</p></div></div><div class='botonesContenido'><div><button class='boton' id='reunion' value = 'Click me' onclick = 'respCorrectaNuevaReunion()'><img src='../img/zoomChafa.png' alt='Nva Reu' class='imgBoton'><p class='txtBoton'>Nueva reunión</p></button><button class='boton' value = 'Click me' onclick = 'respIncorrecta()'><img src='../img/unirseChafa.png' alt='Nva Reu' class='imgBoton'><p class='txtBoton'>Unirse</p></button></div><div><button type='button' class='boton' value = 'Click me' onclick = 'respIncorrecta()'><img src='../img/programarChafa.png' alt='Nva Reu' class='imgBoton'><p class='txtBoton'>Programar</p></button><button class='boton' value = 'Click me' onclick = 'respIncorrecta()'><img src='../img/compartirPantallaChafa.png' alt='Nva Reu' class='imgBoton'><p class='txtBoton'>Compartir</p></button></div></div><div class='menu'><table><tr><td class='botonesMenu' ><p>Reunión y Chat</p></td><td class='botonesMenu'><p>Reuniones</p></td><td class='botonesMenu'><p>Contactos</p></td><td class='botonesMenu'><p>Más</p></td></tr></table></div>";
    document.getElementById("fondoNuevaReunion").setAttribute('id', 'contenidoZoom');
    return;
}

let quiz1 = 0;
let quiz2 = 0;
function quizCompletado(){
    document.getElementById("mensaje").innerHTML = "¡Felicidades! Completaste el quiz 'Nueva Reunión'";
    document.getElementById("mensaje").style.backgroundColor = "#cae8ca";
    document.getElementById("mensaje").style.border = "2px solid #3d863f";
    $("#mensaje").fadeIn(1000);
    $("#mensaje").fadeOut(10000);
//    document.getElementById("fondoNuevaReunion").innerHTML = "";
    $("#fondoNuevaReunion").fadeOut(1000);
    $("#textoReunion").fadeOut(1000);
    $("#texto2Reunion").fadeOut(1000);
    document.getElementById("preguntaReunion").style.textDecoration = "line-through";
    document.getElementById("preguntaReunion").innerHTML = "¿Cómo creamos una nueva reunión? (COMPLETADO)";
    quiz1 = quiz1 + 1;
    acabarTodoElQuiz();
    return;
}
function quizCompPantallaCompletado(){
    document.getElementById("mensaje").innerHTML = "¡Felicidades! Completaste el quiz 'CompartirPantalla'";
    document.getElementById("mensaje").style.backgroundColor = "#cae8ca";
    document.getElementById("mensaje").style.border = "2px solid #3d863f";
    $("#mensaje").fadeIn(1000);
    $("#mensaje").fadeOut(10000);
    $("#compartirPantalla").fadeOut(1000);
    $("#textoVoF").fadeOut(1000);
    document.getElementById("preguntaCompPantalla").style.textDecoration = "line-through";
    document.getElementById("preguntaCompPantalla").innerHTML = "¿El ícono correcto para compartir pantalla es de color verde? (COMPLETADO)";
    quiz2 = quiz2 + 1;
    acabarTodoElQuiz();
    return;
}
function acabarTodoElQuiz(){
    if(quiz1 == 1 & quiz2 == 1){
        document.getElementById("preguntaReunion").style.display = "none";
        document.getElementById("preguntaCompPantalla").style.textDecoration = "initial";
        document.getElementById("preguntaCompPantalla").innerHTML = "¡Felicidades! Completaste todos los Quizes de esta sección.<br><br><table style='font-weight: initial; font-size: large;'><tr><td><button onclick='recargar();' href='../html/quizZoom.html' style='margin-left:5%;border-radius: 20px;'>Repetir Quiz</button></td><td><button style='margin-left:5%;border-radius: 20px;'><a sytle = '  ' href='../html/index.html'>Regresar al menú principal</a></button></td></tr></table>";
    }
}
function recargar(){
    location.reload();
}
function respIncorrecta(){            
    document.getElementById("mensaje").innerHTML = "¡Intente de nuevo! Respuesta incorrecta.";
    document.getElementById("mensaje").style.backgroundColor = "#e8caca";
    document.getElementById("mensaje").style.border = "2px solid #863d3d";
    $("#mensaje").fadeIn(1000);
    $("#mensaje").fadeOut(10000);
    return;
}