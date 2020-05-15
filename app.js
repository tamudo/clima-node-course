const lugar = require(`./lugar/lugar`);
const clima = require(`./clima/clima`);

const argvs = require('yargs').options({
    direccion: {
        alias: `d`,
        desc: 'Dirección de la unidad para obtener el clima',
        demand: true
    }
}).argv;

console.log(argvs.direccion);

/*lugar.getLugarLatLng(argvs.direccion)
    .then(console.log);

clima.getClima(3.14, 3)
    .then(console.log)
    .catch(console.log);

// una funcion async regresa siempre una promesa

*/
const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima de ${coords.direccion} es de ${temp}.`;
    } catch (error) {
        return `El clima de ${objLugar.direccion} no se pudo determinar`;
    }

}

getInfo(argvs.direccion)
    .then(console.log)
    .catch(console.log);