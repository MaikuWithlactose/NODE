const fs = require('fs/promises');
const readline = require('readline');

function Pregunta(TextoPregunta) {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question(TextoPregunta,(respuesta) => {
      resolve(respuesta);
      rl.close();
    })
  });
}

async function readConsole() {
  try {
    //Obtenemos los resultados
    const nombre = await Pregunta("Cuál es tu nombre?")
  
    const apellido = await Pregunta("Cual es tu apellido?")
  
    const edad = await Pregunta("Cual es tu edad?")

    //Generamos un objeto JSON
    const user = { name: nombre, surname: apellido, age: edad }

    //Lo cargamos en el fichero de memoria
    const FicheroObjetivo = 'objetouser.json';
    const Codificacion = 'utf-8';
    const ContenidoFichero = JSON.stringify(user);

    await fs.writeFile(FicheroObjetivo, ContenidoFichero, Codificacion)
    .then( () => {
      const LecturaFichero = fs.readFile( FicheroObjetivo, Codificacion)
      .then(() => {
        console.log("El usuario leído de "+FicheroObjetivo+" es "+ LecturaFichero)
      })
    });

  } catch (error) {
    console.log("Error: "+ error)
  }
}



exports.readConsole = readConsole;
