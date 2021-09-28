const refranes = [
    "CAMARON QUE SE DUERME SE LO LLEVA LA CORRIENTE",
    "A CABALLO REGALADO NO SE LE MIRA EL DIENTE",
    "QUIEN A HIERRO MATA A HIERRO MUERE"
]

var refran = "";
var refranOculto = ""
let cont = 0

const elegirRefran = () => {
    const pos = Math.round(Math.random() * 2);
    return refranes[pos]
}
const ocultarRefran = (refran) => {
    let refranOcultado = ""
    for (let caracter of refran){
        if(caracter != " "){
            //Debo ocultar caracter
            refranOcultado += "_" 
        }else{
            refranOcultado += caracter
        }
    }
    return refranOcultado; 
}

const cargarRefran = (refran) => {
    //const divRefran = document.getElementById("refran")
    const divRefran = document.querySelector("#refran")
    divRefran.innerHTML = refran
}

const buscarLetraRefran = (letra, refran, refranOculto) => {
    let nuevoRefranOculto = ""
    for (let i= 0;i<refran.length; i++ ){
        if (letra == refran[i]){
            //Se encuentra la letra
            nuevoRefranOculto += refran[i]
        }else{
            nuevoRefranOculto += refranOculto[i]
        }
    }
    return nuevoRefranOculto;
}

const cargarNuevaImagen = (contador) => {
    let img = document.querySelector("#imagen")
    img.setAttribute("src", "/Semana 5/Hangman/Hangman-" + contador + ".png")
}

const mostrarAlerta = (gano) => {
    const divAlert = document.createElement("div")
    
    if(gano){
        divAlert.setAttribute("class", "alert alert-success mt-4")
        divAlert.innerText = "Ganador!"
    }
    else{
        divAlert.setAttribute("class", "alert alert-danger mt-4")
        divAlert.innerText = "Perdio :( "
    }

    const divParteDerecha = document.querySelector("#parte_derecha")
    divParteDerecha.appendChild(divAlert)
}

const letraInputOnKeypress = (evt) =>{
    const letraIngresada = evt.key.toUpperCase()
    const nuevoRefranOculto = buscarLetraRefran(letraIngresada, refran, refranOculto)
    if(refranOculto == nuevoRefranOculto){
        //No descubrio una nueva letra
        if(cont < 6 ){
            cargarNuevaImagen(++cont)
            console.log("Deberia mostrar una nueva imagen")
            if(cont == 6){
                console.log("Perdio")
                mostrarAlerta(false)
            }
        }
    }else {
        refranOculto = nuevoRefranOculto
        cargarRefran(refranOculto)

        if(refranOculto == refran){
            // Gano
            mostrarAlerta(true)
            console.log("Gano")
        }
    }
}

const main = () => {
    refran = elegirRefran()
    refranOculto = ocultarRefran(refran);

    cargarRefran(refranOculto)

    let inputLetras = document.querySelector("#letras")
    inputLetras.addEventListener("keypress",    letraInputOnKeypress)
}

window.addEventListener("load", main)