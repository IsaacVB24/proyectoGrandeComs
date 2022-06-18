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
    document.getElementById("mensaje").style.fontSize = "22px";
    $("#mensaje").fadeIn(500);
    $("#mensaje").fadeOut(5000);

    // Deshabilitamos la pregunta 1 y mostramos la preguna 2
    let q1 = document.getElementById("q1");
    let q2 = document.getElementById("q2");

    q1.style.display = "none";
    q2.style.display = "block";

    //Cambiamos el texto de las preguntas
    q1 = document.getElementById("pwa1");
    q2 = document.getElementById("pwa2");

    q1.innerHTML = "¡Perfecto!, ahora que abriste el contacto..."
    q2.innerHTML = "¿Qué mensaje le quieres mandar?"

    let 

    return;
}

function respIncorrecta(){            
    document.getElementById("mensaje").innerHTML = "¡Intente de nuevo! Respuesta incorrecta.";
    document.getElementById("mensaje").style.backgroundColor = "#e8caca";
    document.getElementById("mensaje").style.border = "2px solid #863d3d";
    document.getElementById("mensaje").style.fontSize = "22px";
    $("#mensaje").fadeIn(500);
    $("#mensaje").fadeOut(5000);
    return;
}

function sendText(){

    let inputText = document.getElementById("WAText").value;
    let message = document.getElementById("WAMessage");

    message.innerHTML = inputText;
    message.style.visibility = "visible";

    quizCompletado()
    return;
}

function quizCompletado(){
    document.getElementById("mensaje").innerHTML = "¡Felicidades! Completaste el quiz";
    document.getElementById("mensaje").style.backgroundColor = "#cae8ca";
    document.getElementById("mensaje").style.border = "2px solid #3d863f";
    $("#mensaje").fadeIn(1000);
    $("#mensaje").fadeOut(5000);
    $("#q2").fadeOut(5000, "linear", () => {$("#fin").fadeIn(1000);} );
    $("#textoReunion").fadeOut(100);
    document.getElementById("pwa1").style.textDecoration = "line-through";
    document.getElementById("pwa2").style.textDecoration = "line-through";
    document.getElementById("pwa1").innerHTML = "(COMPLETADO)";
    document.getElementById("pwa2").innerHTML = "¿Cómo enviar un mensaje?";
    return;
}
