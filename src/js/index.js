import '../css/style.css';
import { drawHeader } from './dom.js'
import { drawMainContainer } from './dom.js'
import { drawFooter } from './dom.js'
import { updateDetails } from './updateDetails.js';
// /////////////////////////
(function display() {
    drawHeader();
    drawMainContainer();
    drawFooter();
}
)();
// /////////////////////////
async function fetchData(location) {
    try {
        const request = await fetch(`http://api.weatherapi.com/v1/current.json?key=72f920ddfbf143c9ac1164854240606&q=${location}`, { type: 'cors' });
        const response = await request.json();
        return response
    } catch (error) {
        console.log('oopsie, we got an error UwU  ' + error)
    }
}
// ///////////////////////////
async function createDataObject(value) {

    const searchInput = document.getElementById('input-location');
    const getLocation = () => { if (searchInput.value) { return searchInput.value } else { return 'bergen' } }

    const data = await fetchData(getLocation());
    console.log(data);

    let currLocation = {
        test: 'yipp',
        location: {
            city: data.location.name,
            country: data.location.country,
            time_epoch: data.location.localtime_epoch,
        },
        condition: {
            code: data.current.condition.code,
            text: data.current.condition.text,
        },
        metric: {
            temp: data.current.temp_c,
            feelsLike: data.current.feelslike_c,
            wind: data.current.wind_kph,
            tempUnit: '°C',
            windUnit: 'KPH',
        },
        imperial: {
            temp: data.current.temp_f,
            feelsLike: data.current.feelslike_f,
            wind: data.current.wind_mph,
            tempUnit: '°F',
            windUnit: 'MPH',
        },
        humidity: data.current.humidity,
        wind_dir: data.current.wind_dir,
        uv: data.current.uv,
        lastUpdate: data.current.last_updated,
        rainfall_mm: data.current.precip_mm,
    }
    return currLocation;
}

// /////////////////////////
const submit = document.getElementById('submit-location');
submit.addEventListener('click', async () => {
    const currLocation_Data = createDataObject();
    updateDetails(await currLocation_Data)
})
// ////////////////////////