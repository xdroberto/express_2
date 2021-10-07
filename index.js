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
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.get("/", (req, res, next) => {
    res.status(200).json({code: 1, message: "Bienvenido al pokedex"});
});

app.use("/pokemon", pokemon);

app.use((req, res, next) => {
    return res.status(404).json({code: 404, message: "URL no encontrada"});
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running...')

});