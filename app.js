const { crearArchivoTabla } = require("./helpers/multiplicar");
const argv = require('./config/yargs')

console.clear()

crearArchivoTabla(argv.b, argv.l, argv.h)
    .then(file => {
        console.log('Se creo el archivo: ', file);
    })
    .catch( err => console.log(err))