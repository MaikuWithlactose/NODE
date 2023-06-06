const fs = require('fs/promises');

function writeAndReadObject(objetouser, user) {
  return fs.writeFile(objetouser, JSON.stringify(user))
    .then(() => {
      return fs.readFile(objetouser, 'utf-8');
    })
    .then(data => {
      return JSON.parse(data);
    });
}

exports.writeAndReadObject = writeAndReadObject;
