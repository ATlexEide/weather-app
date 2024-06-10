import '../css/style.css';
import { drawHeader } from './dom.js'
import { drawMainContainer } from './dom.js'
import { drawFooter } from './dom.js'
import { body } from './dom.js';

const API_KEY = '72f920ddfbf143c9ac1164854240606';
// const LOCATION = 'bergen'




export async function fetchWeatherData(LOCATION = 'bergen') {
    try {
        const request = await fetch(`http://api.weatherapi.com/v1/current.json?key=72f920ddfbf143c9ac1164854240606&q=` + LOCATION, { type: 'cors' });
        const response = await request.json();
        const dataObj = {
            condition: {
                code: response.current.condition.code,
                text: response.current.condition.text,
            },
            location: {
                city: response.location.name,
                country: response.location.country,
                local_time: response.location.localtime,
                local_time_epoch: response.location.localtime_epoch,
            },
            metric: {
                temp: response.current.temp_c,
                feelsLike: response.current.feelslike_c,
                wind: response.current.wind_kph,
                windUnit: 'KPH',
            },
            imperial: {
                temp: response.current.temp_f,
                feelsLike: response.current.feelslike_f,
                wind: response.current.wind_mph,
                windUnit: 'MPH',
            },
            humidity: response.current.humidity,
            wind_dir: response.current.wind_dir,
        };
        return dataObj
    } catch (error) {
        return 'Oops'
    };

};


export async function addEventListener(id) {
    const test = document.getElementById('input-location')
    console.log(test.value)
    document.getElementById(id).addEventListener('click', (e) => { e.preventDefault(); display(test); })
}
// display(data)
// function display(data) {
//     body.innerHTML = '';
//     // Display all elements
//     drawHeader();
//     drawMainContainer(data);
//     drawFooter();
//     addEventListener('submit-location');
// };

async function display() {
    const data = await fetchWeatherData();
    body.innerHTML = '';
    // Display all elements
    drawHeader();
    drawMainContainer(data);
    drawFooter();
    addEventListener('submit-location');

};
display()