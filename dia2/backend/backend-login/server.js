/*en caso de  hacer uso con el directorio controlador se 
debe importar como se observa en la siguiente linea, con el nombre del archivo js
que contiene la logica */
//const controller = require('./controller/nombredelcontrollador.js');
const express = require("express");
const morgan = require("morgan");
const apiRouter = require("./routes");
const bodyParser = require ("body-parser");
const cors = require('cors');



//instancia de express en mi app
const app = express();
app.use(cors());

app.use((req, res, next)=>{
    res.header("Acces-Control-Allow-Original", "*");
    res.header("Acces-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Acces-Control-Allow-Methods: GET, POST, DELETE");
    next();
})

//middleware morgan para detectar peticiones
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));




//manejador rutas

app.use('/api', apiRouter);

app.set('PORT', process.env.PORT || 3000);


// API ENDPOINTS
/*se debe contar un una ruta por medio de método post para el inicio de sesión de la siguiente manera:
'/api/auth/signin'
*/
//primera ruta
app.get('/', (req, res) => {
    console.log("Estructura base del proyecto backend");
    res.send("Estructura base del proyecto backend");
});

app.listen(app.get('PORT'), () => {
    console.log(`Running on http://localhost:${app.get('PORT')}`)
})

module.exports = app;