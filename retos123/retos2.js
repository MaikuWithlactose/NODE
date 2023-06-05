const fs = require("fs");

let user = { name: 'Jill', surname: 'Valentine', age: 35 };

fs.writeFile('./objetouser.json', JSON.stringify(user), () => {
    fs.readFile('./objetouser.json', 'utf-8', (err, info) => {
        user = JSON.parse(info);
        console.log('Nombre:', user.name);
        console.log('Apellido:', user.surname);
        console.log('Edad:', user.age);
    });
})