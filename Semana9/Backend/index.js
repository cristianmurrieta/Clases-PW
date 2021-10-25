const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = 4444

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true
}))

app.use(express.static('assets')) //configurando soporte de archivos estaticos

app.set("view engine", "ejs")

//Endpoints
app.get('/ejemplo1', (req, res) =>{
    const textoRespuesta = "Hola PW"
    res.send(textoRespuesta)
})

app.get('/ejemplo2', (req, res)=> {
    const htmlRespuesta = "<h1>Hola PWW</h1>"
    res.send(htmlRespuesta)
})

//Recibir data mediante el path
//http://localhost:4444/ejemplo3/cristian/20153146
app.get('/ejemplo3/:nombre/:codigo',(req, res)=> {
    const nombreUsuario = req.params.nombre
    const htmlRespuesta = "<h1>Hola "+ nombreUsuario + "</h1>"
    +"<h2>" + req.params.codigo + "</h2>"
    res.send(htmlRespuesta)
})

//Recibir data mediante query parameters
//http://localhost:4444/ejemplo4?nombre=cristian&codigo=20153146
app.get('/ejemplo4',(req, res) =>{
    const nombreUsuario =req.query.nombre
    const codigo = req.query.codigo
    const htmlRespuesta = "<h1>Hola "+ nombreUsuario + "</h1>"
    +"<h2>" + codigo + "</h2>"
    res.send(htmlRespuesta)
})

//Recibir data por medio de forms
//Endpoint va a mostar el formulario

app.get('/ejemplo5-formulario', (req, res)=>{
    res.render('formulario')
})

//Endpoint que recibe datos del formulario

app.post('/ejemplo5-formulario', (req, res)=>{
    console.log('data-form', req.body)
    res.render('formulario_respuesta', {
        codigo : req.body.frm_codigo,
        nombre : req.body.frm_nombre
    })
})

app.listen(PORT, () => {
    console.log('Se ha iniciado el servidor en el puerto ' + PORT)
})