/*document.write("<h1>Hola Javascript</h1>")*/

/*function clickMeOnClick(){
    document.write("<h1>Hola Javascript </h1>")
}*/

/*function numeroOnClick(numero){
    const inputNumeros = document.getElementById("txt_numeros")
    inputNumeros.value = numero
}**/

var numeroIngresado;
var enOperacion = false;
var operacionActual;

const sumar = (sum1, sum2) =>{
    return sum1 + sum2;
}

const restar = (sum1, sum2) =>{
    return sum1 - sum2;
}

const numeroOnClick = (numero) => {
    const inputNumeros = document.getElementById("txt_numeros")
    const numeroStr = inputNumeros.value;
    if(numeroStr == "0" || enOperacion){
        inputNumeros.value = numero;
        enOperacion = false;
    }else{
        inputNumeros.value = numeroStr + numero;
    }
}

const numeroOnClickNoObstrusivo = (evt) => {
    const but = evt.target;
    const numero = but.innerHTML;
    numeroOnClick(numero)
}

const operacionOnClick = (operacion) => {
    const inputNumeros = document.getElementById("txt_numeros")
    if(operacion == "c"){
        inputNumeros.value = "0";
    }else if(operacion == "+"){
        const numero = inputNumeros.value;
        numeroIngresado = parseInt(numero);
        enOperacion = true;
        operacionActual = sumar;
    }else if(operacion == "-"){
        const numero = inputNumeros.value;
        numeroIngresado = parseInt(numero);
        enOperacion = true;
        operacionActual = restar;
    }else if(operacion == "="){
        if(operacionActual != undefined){
            const numero = inputNumeros.value;
            const res = operacionActual(numeroIngresado, parseInt(numero))
            inputNumeros.value = res;
        }
    }
}

const operacionOnClickNoObstrusivo = (evt) => {
    console.log(this)
    const but = evt.target;
    const op = but.innerHTML;
    operacionOnClick(op)
}

/*const cambiarColorNumero5 = () =>{
    const but5 = document.body.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild
    const classes = but5.getAttribute("class")
    but5.setAttribute("class", classes + " but_verde")
}*/

const crearInputNumeros = () =>{
    var inputNumeros = document.createElement("input")
    inputNumeros.setAttribute("id", "txt_numeros")
    inputNumeros.setAttribute("class", "form-control mb-3")
    inputNumeros.setAttribute("type", "text")
    inputNumeros.setAttribute("value", "0")
    return inputNumeros
}

const crearDivFilaBotones = (numFila) => {
    var div = document.createElement("div")
    div.setAttribute("class", "row mb-1")

    for (var i=0; i<4; i++){
        
        var divCol = document.createElement("div")
        divCol.setAttribute("class", "col")
    
        var etiqueta = ""
        if(i == 3){
            //Boton Operacion
            switch (numFila){
                case 7: etiqueta="+"
                break;
                case 4: etiqueta="-"
                break;
                case 1: etiqueta="*"
                break;
            }
        }else{
            etiqueta = (numFila + i)
        }
        var but = document.createElement("button")
        but.setAttribute("id", "but" + etiqueta)
        but.setAttribute("class", "btn btn-primary")
        but.setAttribute("type", "button")
        but.innerText = etiqueta
        
        divCol.appendChild(but)
        div.appendChild(divCol)

    }

    return div;
}

const crearUltimaFila = () => {

    const etiquetas = ["C", "0", "=", "/"]
    var div = document.createElement("div")
    div.setAttribute("class", "row mb-1")

    for (etiqueta of etiquetas){
        var divCol = document.createElement("div")
        divCol.setAttribute("class", "col")
    
        var but = document.createElement("button")
        but.setAttribute("id", "butC" + etiqueta)
        but.setAttribute("class", "btn btn-primary")
        but.setAttribute("type", "button")
        but.innerText = etiqueta

        divCol.appendChild(but)
        div.appendChild(divCol)
    }
    return div;
}

const construirCalculadora = () => {
    var inputNumeros = crearInputNumeros();
    document.body.appendChild(inputNumeros);

    var divFila = crearDivFilaBotones(7)
    document.body.appendChild(divFila);

    divFila = crearDivFilaBotones(4)
    document.body.appendChild(divFila);

    divFila = crearDivFilaBotones(1)
    document.body.appendChild(divFila);

    divFila = crearUltimaFila()
    document.body.appendChild(divFila);

}

const main = () => {
    construirCalculadora();

    for(var i=0; i<10; i++){
        const but = document.getElementById("but"+i)
        //but.onclick = numeroOnClickNoObstrusivo;
        but.addEventListener("click", numeroOnClickNoObstrusivo)
    }
    const arrOperaciones = ["+", "-", "c", "="]
    for (var op of arrOperaciones){
        const but = document.getElementById("but"+ op)
        but.onclick = operacionOnClickNoObstrusivo;
    }
    cambiarColorNumero5()
}

window.addEventListener("load", main);

/*const main2 = () => {
    console.log("Segunda parte del main")
}

//window.onload = main;

window.addEventListener("load", main);
window.addEventListener("load", main2);*/