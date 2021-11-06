const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs')

//let base = 5;
console.clear();
// console.log( process.argv )
console.log( argv );

console.log('base: yargs', argv.b)


// const [ , , arg3 = 'base=5' ] = process.argv;
// const [ , base ] = arg3.split('=');

// console.log(base);


crearArchivo( argv.b, argv.l, argv.h )
    .then( a => console.log( a, 'By gabi' ))
    .catch( e => console.log( e ));

