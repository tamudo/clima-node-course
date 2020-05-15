//api.openweathermap.org/data/2.5/weather?lat=41,389999&lon=2,16&appid=3a7754291c0570ae4d7854e065646048&units=metric
const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=3a7754291c0570ae4d7854e065646048&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}