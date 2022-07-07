
const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            desc: 'Base de la tabla',
            demandOption: true,
            requiresArg: true,
            number: true,
        },
        'l': {
            alias: 'listar',
            boolean: true,
            default: false,
        },
        'h': {
            alias: 'hasta',
            desc: 'Hasta que indice mostrar la tabla',
            demandOption: true,
            requiresArg: true,
            number: true,
            default: 10,
        },
    })
    .check((argv, options) => {
        if (isNaN(argv.b) && isNaN(argv.h)) {
            throw 'El valor tiene que ser un numero'
        }
        return true
    })
    .argv


module.exports = argv;