const fs = require("fs");
const colors = require("colors");

const crearArchivo = async(base = 5, listar=false, hasta = 10) => {

    try {
        let salida = '';
        let consola = '';
    
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${i}\n`;
            consola += `${colors.yellow(base)} x ${colors.yellow(i)} = ${colors.yellow(base * i)}\n`;
        }

        if( listar ) {
            console.log("====================================".green);
            console.log(`           Tabla del: `, colors.blue(base));
            console.log("====================================".green);
            console.log(consola)
            }
    
        //WrifeFileSync nos permite crear un archivo txt con al inforamción que se imprime en consola
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return(`Tabla-${base}.txt`)
    }
     catch (err) {
        throw err
    }
}


module.exports = {
    crearArchivo
}