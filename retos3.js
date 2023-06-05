const fs = require('fs')
const readline = require('readline')
const rl = readline.createInterface(process.stdin, process.stdout)



let ObjetoUsuario = {
    name: 'Maika',
    surname: 'Nunyez',
    age: 28
}

rl.question('Nombre Prohibido? ', (input) => {
    ObjetoUsuario.name = input
    rl.question('Apellido Maldito?', (input) => {
        ObjetoUsuario.surname = input
        rl.question('Edad abismal?', (input) => {
            ObjetoUsuario.age = input
            rl.close()
            fs.writeFile('ObjetoUsuario.json', JSON.stringify(ObjetoUsuario), (err) => {
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
        })
    })
})