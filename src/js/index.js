import '../css/style.css';
import { display } from './dom';
display();

const API_KEY = '72f920ddfbf143c9ac1164854240606';
const LOCATION = 'bergen'


async function fetchWeatherData(API_KEY = '72f920ddfbf143c9ac1164854240606', LOCATION = 'bergen') {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${LOCATION}`);
    const dataJSON = await response.json();
    const data = {
        condition: {
            code: dataJSON.current.condition.code,
            text: dataJSON.current.condition.text,
        },
        location: {
            city: dataJSON.location.name,
            country: dataJSON.location.country,
            local_time: dataJSON.location.localtime,
            local_time_epoch: dataJSON.location.localtime_epoch,
        },
        celcius: {
            temperature: dataJSON.current.temp_c,
            feelsLike: dataJSON.current.feelslike_c,
        },
        fahrenheit: {
            temperature: dataJSON.current.temp_f,
            feelsLike: dataJSON.current.feelslike_f,
        },
    };
    return data;
};

const dataObject = fetchWeatherData();

document.querySelector('button').addEventListener('click', (e) => { e.preventDefault(); console.log(test); })