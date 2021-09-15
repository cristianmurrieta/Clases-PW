/*document.write("<h1>Hola Javascript</h1>")*/

/*function clickMeOnClick(){
    document.write("<h1>Hola Javascript </h1>")
}*/

/*function numeroOnClick(numero){
    const inputNumeros = document.getElementById("txt_numeros")
    inputNumeros.value = numero
}*/

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