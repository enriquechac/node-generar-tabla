//* File System (Crear y modificar archivos)
const fs = require("fs")

//* Paquete para cambiar el color en el texto de la consola. 
const colors = require('colors/safe')


const crearArchivoTabla = async (base = 1, listar = false , limite = 10) => {
    try {

        let consola = '', data = ''
        
        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base * i}\n`            
            consola += ` ${base} ${colors.italic.green('x')} ${colors.cyan(`${i}`)} ${colors.italic.green('=')} ${colors.red(`${base * i}`)}\n`            
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, data)


        if (listar) {
            console.log(colors.yellow('==================='))
            console.log(colors.italic.green('   TABLA DEL '), colors.blue(base))
            console.log(colors.yellow('==================='))
            console.log(consola);
        }


        return colors.italic.red(`tabla-${base}.txt`);
        
    } catch (error) {
        throw error
    }    
}

module.exports = {
    crearArchivoTabla
}