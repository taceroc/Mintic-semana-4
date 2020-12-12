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


//primera ruta
app.get('/', (req, res) => {
    res.send("Hello World!");
});

//manejador rutas
app.get('/api', (req, res) => {
    res.send("Api!");
});
app.use('/api', apiRouter);

app.set('PORT', process.env.PORT || 3000);

app.listen(app.get('PORT'), ()=>{
    console.log('server up');
});