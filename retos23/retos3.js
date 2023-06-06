const fs = require("fs/promises");
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

let user2 = {};

const questionName = () => {
  return new Promise((resolve, reject) => {
    rl.question('Como te llamas?: ', (name) => {
      user2.name = name;
      resolve();
    });
  });
};

const questionSurname = () => {
  return new Promise((resolve, reject) => {
    rl.question('Como te apellidas?: ', (surname) => {
      user2.surname = surname;
      resolve();
    });
  });
};

const questionAge = () => {
  return new Promise((resolve, reject) => {
    rl.question('Qué edad tienes?: ', (age) => {
      user2.age = age;
      resolve();
    });
  });
};

questionName()
  .then(questionSurname)
  .then(questionAge)
  .then(() => {
    return fs.writeFile('./objetouser2.json', JSON.stringify(user2));
  })
  .then(() => {
    return fs.readFile('./objetouser2.json', 'utf-8');
  })
  .then(info => {
    user2 = JSON.parse(info);
    console.log('===================');
    console.log('Nombre:', user2.name);
    console.log('Apellido:', user2.surname);
    console.log('Edad:', user2.age);
    console.log('===================');
    console.log('Escritura completada.');
    rl.close();
  })
  .catch(error => {
    console.error(error);
    rl.close();
  });
