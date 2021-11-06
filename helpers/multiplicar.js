const fs = require('fs');
const { argv } = require('process');
const colors = require('colors')

const crearArchivo = async ( base, listar, hasta ) => {
        
        try {

            console.clear();

            let salida = '';
            let consola= '';

            let h = hasta;

            for( let i = 1; i <= h; i++){
                salida += `${base} x ${i} = ${base * i}\n`; 
                consola += `${colors.bgBlue(base).black} ${'x'.yellow} ${colors.bgCyan(i).black} = ${base * i}\n`;
            }

            if( listar ){

                console.log('=============================='.green);
                console.log('=============================='.red);
                console.log( '         TABLA DEL'.grey, colors.cyan(base) );
                console.log('=============================='.red);
                console.log('=============================='.green);

                console.log( consola.blue );
            }

            fs.writeFileSync( `./salida/tabla-${base}.txt`, salida );

            return `tabla-${base}.txt creado`.bgRed;

        } 
        catch (error) {
            throw error;
        }

};


module.exports = {
    crearArchivo
}

