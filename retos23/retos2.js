const fs = require('fs/promises');

let user = { name: 'Jill', surname: 'Valentine', age: 35 };

fs.writeFile('./objetouser.json', JSON.stringify(user))
  .then(() => {
    return fs.readFile('./objetouser.json', 'utf-8');
  })
  .then(info => {
    user = JSON.parse(info);
    console.log('Nombre:', user.name);
    console.log('Apellido:', user.surname);
    console.log('Edad:', user.age);
  })
  .catch(error => {
    console.error(error);
  });
