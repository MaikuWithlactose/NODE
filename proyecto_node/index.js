const rc = require('./readConsole');
const wr = require('./writeAndReadObject');

rc.readConsole((user) => {
    wr.writeAndReadObject('./objetouser', user, (user) => {
        console.log('Nombre:', user.name);
        console.log('Apellido:', user.surname);
        console.log('Edad:', user.age);
    });
});