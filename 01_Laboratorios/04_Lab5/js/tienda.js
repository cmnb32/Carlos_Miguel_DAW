let cantCCS = 0;
let cantHOLIC = 0;
let cantTRC = 0;

document.getElementById("ccsagregar").addEventListener("click", function(){
    cantCCS = document.getElementById("ccs").value;
    agregarCarrito();
})

document.getElementById("holicagregar").addEventListener("click", function(){
    cantHOLIC = document.getElementById("holic").value;
    agregarCarrito();
})

document.getElementById("trcagregar").addEventListener("click", function(){
    cantTRC = document.getElementById("trc").value;
    agregarCarrito();
})

function agregarCarrito(){
    let sub = document.getElementById("sub");
    let iva = document.getElementById("iva");
    let tot = document.getElementById("tot");
    sub.innerHTML = "Subtotal: $"  + ((cantCCS * (270 - (270 * 0.16) )) + (cantHOLIC * (150 - (150 * 0.16) )) + (cantTRC * (110 - (110 * 0.16) ) )).toFixed(2) + " MXN";
    
    iva.innerHTML = "IVA (16%): $"  + ((cantCCS * ((270 * 0.16) )) + (cantHOLIC * ((150 * 0.16) )) + (cantTRC * ((110 * 0.16) ) )).toFixed(2) + " MXN";
    
    tot.innerHTML = "<strong>Total: $"  + ((cantCCS * 270) + (cantHOLIC * 150) + (cantTRC * 110) ).toFixed(2) + " MXN</strong>";
    
    setTimeout(function(){ alert("De momento no se pueden realizar compras. Gracias por probar la página :D"); }, 2000);
}
