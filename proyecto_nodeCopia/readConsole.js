const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

function readConsole() {
  return new Promise((resolve, reject) => {
    let user = {};

    rl.question('Cual es tu nombre? ', (name) => {
      user.name = name;

      rl.question('Cual es tu apellido? ', (surname) => {
        user.surname = surname;

        rl.question('Cual es tu edad? ', (age) => {
          user.age = parseInt(age);

          rl.close();
          resolve(user);
        });
      });
    });
  });
}

exports.readConsole = readConsole;
