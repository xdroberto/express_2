const bodyParser = require('body-parser');
const express= require('express');
const app = express();
const { pokemon } = require('./pokedex.json')

/*
Verbos http

    GET: Lo que se ejecuta cuando se pone una url (Obtener recursos)
    POST: Guardar algo en un sitio web (Almacenar recursos)
    PATCH: Actualizacion de 1 dato de un registro (user: Nombre, genero,...)
    PUT: Actualizar todos los datos de un registro
    DELETE: Borrar un registro 

*/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
    res.status(200).send("Bienvenido al pokedex");
    
});

app.post("/pokemon", (req, res, next) => {
    return res.status(200).send(req.body.username);

});

app.get("/pokemon", (req, res, next) => {
    res.status(200);
    res.send(pokemon);
    
});

app.get('/pokemon/:id([0-9]{1,3})', (req, res, next) => {
    const id = req.params.id -1;
    if(id >=0 && id <= 150 ){
        res.status(200).send(pokemon[req.params.id-1])
    }
    return res.status(404).send("Pokemon no encontrado");
});

app.get('/pokemon/:name([A-Za-z]+)', (req, res, next) => {
    const name = req.params.name;

    const pk= pokemon.filter((p)=>{
        return (p.name.toUpperCase() == name.toUpperCase()) && p;
        
    });

    (pk.length>0) ? 
        res.status(200).send(pk):
        res.status(404).send("Pokemon no encontrado");
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running...')

});