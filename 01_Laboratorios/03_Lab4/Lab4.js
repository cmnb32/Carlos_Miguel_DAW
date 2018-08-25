function generaTabla(){
    var num = prompt("Ingrese un número", "6");
    var tab = ("<table><tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");
    
    for(var i = 1; i <= num; i++){
        var sqrt = Math.pow(i, 2);
        var cub = Math.pow(i, 3);
        tab = tab + "<tr><td>" + i + "</td><td>" + sqrt + "</td><td>" + cub + "</td></tr>"; 
    }
    tab = tab + "</table>";
    var ventana = window.open("", "Ventana", "width=300, height=300");
    ventana.document.write(tab);
    return 0;
}

function sumaAleatoria(){
    var num1 = parseInt(Math.random() * 100+1);//1 al 100
    var num2 = parseInt(Math.random() * 100+1);
    var tex = document.getElementById("resultado2");
    
    tiempoI = new Date();
    var tiempo1 = tiempoI.getSeconds();
    
    var num3 = prompt("¿Cuánto es " + num1 + " + " + num2 + "?", "Por ejemplo: 86");
    
    tiempoF = new Date()
    var tiempo2 = tiempoF.getSeconds();
    
    var tiempoTotal = tiempo2 - tiempo1;
    var res = num1 + num2;
    if(res == num3){
        tex.innerHTML = "<p>¡CORRECTO!</p> <p>La suma de " + num1 + " + " + num2 + " = " + res + "</p> <p>TIEMPO: " + tiempoTotal + " segundos</p>";
    }else{
        tex.innerHTML = "<p>¡INCORRECTO!</p> <p>La suma de " + num1 + " + " + num2 + " = " + res + "</p> <p>TIEMPO: " + tiempoTotal + " segundos</p>";
        return 0;
    }
}
    
function contador(arreglo){
    var tex = document.getElementById("resultado3");
    var largo = arreglo.length;
    var pos = 0, neg = 0, cer = 0;
    for(var i = 0; i < largo; i++){
        if(arreglo[i] == 0){
            cer++;
        }else if(arreglo[i] < 0){
            neg++;
        }else{
            pos++;
        }
    }
    tex.innerHTML = "<p>Positivos: " + pos + " Negativos: " + neg + " Ceros: " + cer + "</p>";
    return 0;
}

function promedios(arreglos){
    var tex = document.getElementById("resultado4");
    var res;
    var largo = arreglos.length;
    
    for(var i = 0; i < largo; i++){
        var sum = 0;
        var largo2 = arreglos[i].length;
        
        for(var j = 0; j < largo2; j++){
            sum = sum + arreglos[i][j];
            res = res + arreglos[i][j] + ", ";
        }
        
        res = res + "";
        var prom = sum / largo2;
        res = res + "Promedio: " + prom + "<br>";
    }   
    tex.innerHTML = res;
    return 0;
}

function inverso(num){
    var tex = document.getElementById("resultado5");
    var aux = 0;
    while(num > 0){
        aux = (aux * 10) + (num % 10);
        num = Math.floor (num / 10);
    }
    
    tex.innerHTML = aux;
}

function horner(arreglo, n, x){
    var i;
    var res = arreglo[n];
    
    for(i = n - 1; i >= 0; i--){
        res = arreglo[i] + (x * res);
    }
    return res;
}

function problema6(){
    var tex = document.getElementById("resultado6");
    var n = 3;
    var arreglo = [1.5, 3.2, -6.1, 1];
    var x = 4.71;
    var res = "<p> f(x) = x^3 - 6.1x^2 + 3.2x + 1.5 para x = 4.71: " + horner(arreglo, n, x) + "</p>";
    
    tex.innerHTML = res;
    return 0;
}