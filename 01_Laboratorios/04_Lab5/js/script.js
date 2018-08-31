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