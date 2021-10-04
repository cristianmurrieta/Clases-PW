
const crearTabla = () => {
    const divTabla = document.createElement("table")
    const divTbody = document.createElement("tbody")
    
    for(var i=0; i<10 ; i++){
        const divTr = document.createElement ("tr")
        for(var j=0; j<10; j++){
            const divTd = document.createElement("td")
            divTd.innerText = (i+1) + ", "+ (j+1)
            divTd.setAttribute("id", (i+1) + ", "+ (j+1))
            divTr.appendChild(divTd)
        } 
        divTbody.appendChild(divTr)
    }
    divTabla.appendChild(divTbody)
    document.body.appendChild(divTabla)
    divTabla.setAttribute("class", "table")
    document.body.setAttribute("style", "20px")
}

const tableOnClick = (evt) => {
    console.log(evt)
    const idTable = evt.innerText
    console.log(idTable)
    pintarCelda(idTable)
}

const pintarCelda = (idtable) => {
    const celdaPintar = document.getElementById(idtable)
    celdaPintar.setAttribute("style", "background-color: #0A0A0A; color: FEF9F9")
}

const main = () => {
    const crearTablaFinal = crearTabla()
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            const idTabla = document.getElementById((i+1) + ", "+ (j+1))
            idTabla.addEventListener("click", tableOnClick)
        }
    }
}

window.addEventListener("load", main)