const { router } = require("../app");

let usuario = null; //(nombre: "Jose", apellidos: "Garcia Garcia"}

function getStart_PuntoInicio(request, response) {
    let respuesta = { error: true, codigo: 200, mensaje: 'Punto de inicio' };
    response.send(respuesta);
}

function getStart_Recibido(request, response) {
    let respuesta = { ok: true, mensaje: 'Recibido!' };
    response.send(respuesta);
}

function getStartAdios(request, response) {
    let respuesta = { ok: true, mensaje: 'Taluego Lucarl!' };
    response.send(respuesta);
}


// function getUser(request, response) {
    
//     let respuesta;
//     if (usuario != null){
//         respuesta = { error: false, codigo: 200, data: usuario };
//     }
//     else {
//         respuesta = { error: true, codigo: 200, mensaje: "El usuario no existe" };
//     }

//     response.send(respuesta);
// }

module.exports = {
    getStart_PuntoInicio: getStart_PuntoInicio,
    getStart_Recibido: getStart_Recibido,
    getStartAdios: getStartAdios,
};