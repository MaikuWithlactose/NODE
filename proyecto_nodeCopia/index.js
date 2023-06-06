const rc = require('./readConsole');
const wr = require('./writeAndReadObject');

rc.readConsole()
  .then(user => {
    return wr.writeAndReadObject('./objetouser.json', user);
  })
  .then(user => {
    console.log('Nombre:', user.name);
    console.log('Apellido:', user.surname);
    console.log('Edad:', user.age);
  })
  .catch(error => {
    console.error(error);
  });
