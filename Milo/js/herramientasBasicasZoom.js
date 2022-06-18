function desactivarAudio(){
    document.getElementById("speaker").src = "../img/speakerInactivo.png";
    document.getElementById("speaker").setAttribute('onclick', 'activarAudio()');
}
function activarAudio(){
    document.getElementById("speaker").src = "../img/speakerActivo.png";
    document.getElementById("speaker").setAttribute('onclick', 'desactivarAudio()');
}

function activarMicrofono(){
    document.getElementById("activarAudio").innerHTML = "Activar micrófono";
    document.getElementById("imgAudio").src = "../img/microfonoActivo.png";
    document.getElementById("microfono").setAttribute('onclick', 'desactivarMicrofono()');
    document.getElementById("activarAudio").setAttribute('onclick', 'desactivarMicrofono()');
}
function desactivarMicrofono(){
    document.getElementById("activarAudio").innerHTML = "Reactivar micrófono";
    document.getElementById("imgAudio").src = "../img/microfonoInactivo.png";
    document.getElementById("microfono").setAttribute('onclick', 'activarMicrofono()');
    document.getElementById("activarAudio").setAttribute('onclick', 'activarMicrofono()');
}

function desactivarVideo(){
    document.getElementById("activarVideo").innerHTML = "Activar video";
    document.getElementById("imgVideo").src = "../img/videoInactivo.png";
    document.getElementById("video").setAttribute('onclick', 'activarVideo()');
    document.getElementById("activarVideo").setAttribute('onclick', 'activarVideo()');
}
function activarVideo(){
    document.getElementById("activarVideo").innerHTML = "Desactivar video";
    document.getElementById("imgVideo").src = "../img/videoActivo.png";
    document.getElementById("video").setAttribute('onclick', 'desactivarVideo()');
    document.getElementById("activarVideo").setAttribute('onclick', 'desactivarVideo()');
}