const fs = require('fs')

let ObjetoUsuario = {
    name: 'Maika',
    surname: 'Nunyez',
    age: 28
}

let data = JSON.stringify(ObjetoUsuario)

fs.writeFile('ObjetoUsuario.json', data, (err) => {
    if (err) console.log(err);
    else {
        console.log('Archivo se ha cargado con éxito');
        console.log('El archivo tiene el siguiente contenido:');
        fs.readFile('ObjetoUsuario.json', 'utf8',
            (err, data) => {
                err ? console.log(err) : console.log(data);
            }
        );
    }
})
