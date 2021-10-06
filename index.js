const bodyParser = require('body-parser');
const morgan = require('morgan');
const express= require('express');
const app = express();
const pokemon = require('./routes/pokemon');

/*
Verbos http

    GET: Lo que se ejecuta cuando se pone una url (Obtener recursos)
    POST: Guardar algo en un sitio web (Almacenar recursos)
    PATCH: Actualizacion de 1 dato de un registro (user: Nombre, genero,...)
    PUT: Actualizar todos los datos de un registro
    DELETE: Borrar un registro 

*/
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res, next) => {
    res.status(200).send("Bienvenido al pokedex");
});

app.use("/pokemon", pokemon);

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running...')

});