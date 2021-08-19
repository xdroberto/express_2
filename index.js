const express= require('express');
const app = express();

/*
Verbos http

    GET: Lo que se ejecuta cuando se pone una url
    POST: Guardar algo en un sitio web
    PATCH: Actualizacion de 1 dato de un registro (user: Nombre, genero,...)
    PUT: Actualizar todos los datos de un registro
    DELETE: Borrar un registro 

*/

app.get("/", (req, res, next) => {
    res.status(200);
    res.send("Bienvenido");

});

app.listen(3000, () => {
    console.log('Server is running...')

});