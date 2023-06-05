const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

let user2 = {};

rl.question('Como te llamas?:', (name) => {
    user2.name = name;
    rl.question('Como te apellidas?: ', (surname) => {
        user2.surname = surname;
        rl.question('Qué edad tienes?:', (age) => {
            user2.age = age;
            fs.writeFile('./objetouser2.json', JSON.stringify(user2), () => {
                fs.readFile('objetouser2.json', 'utf-8', (err, info) => {
                    user2 = JSON.parse(info);
                    console.log('===================');
                    console.log('Nombre:', user2.name);
                    console.log('Apellido:', user2.surname);
                    console.log('Edad:', user2.age);
                    console.log('===================');
                });
                console.log("Escritura completada.")
            });
            rl.close();
        });
    });
})