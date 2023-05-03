function nComentario(){
    
    let li = document.createElement("li");
    let valoringresado = document.getElementById("nuevoComentario").value;
    let text = document.createTextNode(valoringresado);
    li.appendChild(text);

    if(valoringresado === ''){
        alert("Ingrese un comentario")
    }else{
        document.getElementById("comentarios").appendChild(li);
    }

    document.getElementById("nuevoComentario").value = "";
    li.className = "comentario";

    let borrar = document.createElement("p");
    borrar.innerHTML = ("Borrar");
    borrar.className = "close";
    li.appendChild(borrar);

    let close = document.getElementsByClassName("close");
    let i; 
    for(i = 0; i < close.length; i++){
        close[i].onclick = function(){
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}

function botonLikes() {
    var uno = document.getElementById('botonlike');
    if (uno.innerHTML == '200')
        uno.innerHTML = '201';
    else uno.innerHTML = '200'; 
}

function iniciarSesion(){
    var email = document.getElementById("email").value;
    var contrasena = document.getElementById("contrasena").value;

    if(email.value.length > 6 && contrasena.value.length > 8){
        window.location = "Globo.html";
    }else{
        alert("Datos Incorrectos");
    }
}

function FbotonOn() {
    var uno = document.getElementById('botonOn');
    if (uno.innerHTML == 'Seguir')
        uno.innerHTML = 'Dejar Seguir';
    else uno.innerHTML = 'Seguir'; 
}
