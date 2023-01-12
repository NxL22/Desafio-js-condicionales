var  selectPin1 = document.querySelector("#pin1")
var  selectPin2 = document.querySelector("#pin2")
var  selectPin3 = document.querySelector("#pin3")

var parrafoResultado = document.querySelector(".resultado")

function validarPasword(){
    var pin1 = selectPin1.value
    var pin2 = selectPin2.value
    var pin3 = selectPin3.value


    var password = pin1 + pin2 + pin3

    if (password === "911"){
        parrafoResultado.innerHTML = "Password 1 es Correcto."
    }
    else if (password === "714"){
    parrafoResultado.innerHTML = "Password 2 es Correcto."
    }
    else {
        parrafoResultado.innerHTML = "Password Incorrecto."
    }
}