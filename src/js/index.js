import '../css/style.css';
import { drawHeader } from './dom.js';
import { drawMainContainer } from './dom.js';
import { drawFooter } from './dom.js';
import { printData, changeUnits } from './updateDetails.js';

// /////////////////////////
(function display() {
    drawHeader();
    drawMainContainer();
    drawFooter();
}
)();
// /////////////////////////
const searchInput = document.getElementById('input-location');
const getLocation = () => { if (searchInput.value) { return searchInput.value } else { return 'bergen' } };
async function fetchData(location) {
    try {
        const request = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=72f920ddfbf143c9ac1164854240606&q=${location}&days=3`, { type: 'cors' });
        const response = await request.json();
        console.log(response)
        return response;
    } catch (error) {

    };
};
// ///////////////////////////

async function createDataObject(fetchedData) {
    const data = await fetchedData;
    const dataObj = {
        test: 'yipp',
        location: {
            city: data.location.name,
            country: data.location.country,
            time_epoch: data.location.localtime_epoch,
        },
        forecast: [
            {
                date: data.forecast.forecastday[0].date,
                condition: {
                    code: data.forecast.forecastday[0].day.condition.code,
                    icon: data.forecast.forecastday[0].day.condition.icon,
                    text: data.forecast.forecastday[0].day.condition.text,
                },
                metricMax: data.forecast.forecastday[0].day.maxtemp_c,
                metricMin: data.forecast.forecastday[0].day.mintemp_c,
                imperialMax: data.forecast.forecastday[0].day.maxtemp_f,
                imperialMin: data.forecast.forecastday[0].day.mintemp_f,
                metricMaxwind: data.forecast.forecastday[0].day.maxwind_kph,
                imperialMaxwind: data.forecast.forecastday[0].day.maxwind_mph,
                metricPrecipitation: data.forecast.forecastday[0].day.totalprecip_mm,
                imperialPrecipitation: data.forecast.forecastday[0].day.totalprecip_in,
                humidity: data.forecast.forecastday[0].day.avghumidity,
            },
            {
                date: data.forecast.forecastday[1].date,
                condition: {
                    code: data.forecast.forecastday[1].day.condition.code,
                    icon: data.forecast.forecastday[1].day.condition.icon,
                    text: data.forecast.forecastday[1].day.condition.text,
                },
                metricMax: data.forecast.forecastday[1].day.maxtemp_c,
                metricMin: data.forecast.forecastday[1].day.mintemp_c,
                imperialMax: data.forecast.forecastday[1].day.maxtemp_f,
                imperialMin: data.forecast.forecastday[1].day.mintemp_f,
                metricMaxwind: data.forecast.forecastday[1].day.maxwind_kph,
                imperialMaxwind: data.forecast.forecastday[1].day.maxwind_mph,
                metricPrecipitation: data.forecast.forecastday[1].day.totalprecip_mm,
                imperialPrecipitation: data.forecast.forecastday[1].day.totalprecip_in,
                humidity: data.forecast.forecastday[1].day.avghumidity,
            },
            {
                date: data.forecast.forecastday[2].date,
                condition: {
                    code: data.forecast.forecastday[2].day.condition.code,
                    icon: data.forecast.forecastday[2].day.condition.icon,
                    text: data.forecast.forecastday[2].day.condition.text,
                },
                metricMax: data.forecast.forecastday[2].day.maxtemp_c,
                metricMin: data.forecast.forecastday[2].day.mintemp_c,
                imperialMax: data.forecast.forecastday[2].day.maxtemp_f,
                imperialMin: data.forecast.forecastday[2].day.mintemp_f,
                metricMaxwind: data.forecast.forecastday[2].day.maxwind_kph,
                imperialMaxwind: data.forecast.forecastday[2].day.maxwind_mph,
                metricPrecipitation: data.forecast.forecastday[2].day.totalprecip_mm,
                imperialPrecipitation: data.forecast.forecastday[2].day.totalprecip_in,
                humidity: data.forecast.forecastday[2].day.avghumidity,
            },
        ],
        condition: {
            code: data.current.condition.code,
            text: data.current.condition.text,
            icon: data.current.condition.icon,
        },
        metric: {
            temp: data.current.temp_c,
            feelsLike: data.current.feelslike_c,
            wind: data.current.wind_kph,
            tempUnit: '°C',
            windUnit: 'KPH',
            precipitation: data.current.precip_mm,
            precipitationUnit: 'mm',
        },
        imperial: {
            temp: data.current.temp_f,
            feelsLike: data.current.feelslike_f,
            wind: data.current.wind_mph,
            tempUnit: '°F',
            windUnit: 'MPH',
            precipitation: data.current.precip_in,
            precipitationUnit: 'in',
        },
        humidity: data.current.humidity,
        wind_dir: data.current.wind_dir,
        uv: data.current.uv,
        lastUpdate: data.current.last_updated,
    };
    return dataObj;
};
let dataObj = createDataObject(fetchData(getLocation()));
// /////////////////////////
async function updateDataObj(location) {
    dataObj = createDataObject(fetchData(location));
};

const submit = document.getElementById('submit-location');
submit.addEventListener('click', async (e) => {
    e.preventDefault()
    updateDataObj(getLocation());
    printData(dataObj);
    searchInput.value = '';
});

const options = document.querySelectorAll('input[type=radio]');
for (const option of options) {
    option.addEventListener('click', () => {
        changeUnits(dataObj);
    });
};