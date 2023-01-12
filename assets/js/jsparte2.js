var inputGithub = document.querySelector("#CantidadGithub")
var inputSlack = document.querySelector("#CantidadSlack")
var inputGit = document.querySelector("#CantidadGit")

var spanCantidadTotal = document.querySelector("#cantidadTotal")

function calcularTotalStickers(){
    var cantidadGithub = Number(inputGithub.value)
    var cantidadSlack = Number(inputSlack.value)
    var cantidadGit = Number(inputGit.value)


    var CantidadTotal = cantidadGithub + cantidadSlack + cantidadGit

    if(CantidadTotal <= 10){
    spanCantidadTotal.innerHTML = CantidadTotal
    }
    else{
        spanCantidadTotal.innerHTML = "demasiados"
    }
}