document.getElementById("dclick").addEventListener("mouseover", function(){changeTxt(1);});
document.getElementById("dclick").addEventListener("mouseleave", function(){changeTxt(0);});
function contrasenia(){
    let tex = document.getElementById("contrasenia");
    let pass1 = String(document.getElementById("pswd1").value);
    let pass2 = String(document.getElementById("pswd2").value);
    let espacios = false;
    let aux = 0;
    
    if(pass1.length <= 7 || pass2.length <= 7) {
        tex.innerHTML = "<button onclick='contrasenia()'><strong>Verficar</strong></button> La contraseña debe ser mayor a 8 carácteres";
        //alert("La contraseña debe ser mayor a 8 carácteres");
    return false;
    } 
    
 
    if(noEspacios(pass1, pass2, espacios, aux)) {
        tex.innerHTML = "<button onclick='contrasenia()'><strong>Verficar</strong></button> La contraseña no puede contener espacios en blanco";
        //alert ("La contraseña no puede contener espacios en blanco");
    return false;
    }    
    validarPass(pass1, pass2); 
}

function noEspacios(pass1, pass2, espacios, aux){
    while (!espacios && (aux < pass1.length)) {
        if (pass1.charAt(aux) == " "){
            espacios = true;
        }
        aux++;
    }
    return espacios;
}

function validarPass(pass1, pass2){
    let tex = document.getElementById("contrasenia");
    
    if(pass1 == pass2){
        tex.innerHTML = "<button onclick='contrasenia()'><strong>Verficar</strong></button> La contrseña coincide";
    }else{
        tex.innerHTML = "<button onclick='contrasenia()'><strong>Verficar</strong></button> La contrseña no coincide";
    }
}

function changeTxt(num){
    let tex = document.getElementById("dclick");
    if(num == 1){
        tex.innerHTML = "Descrubriste una Nueva función :D";
        tex.style.color = "#055291";
    }else if(num == 0){
        tex.innerHTML = "Validador de Contraseña";
        tex.style.color = "black";
    }
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}