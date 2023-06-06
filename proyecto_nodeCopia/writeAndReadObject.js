const fs = require('fs')

function writeAndReadObject(objetouser, user, callback) {

    fs.writeFile(objetouser.json, JSON.stringify(user), () => {
        fs.readFile(objetouser, 'utf-8', (err, datos) => {
            callback(JSON.parse(datos));
            
        });
    })
}

exports.writeAndReadObject = writeAndReadObject;