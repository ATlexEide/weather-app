import { fetchData } from ".";

async function createDataObject() {
    const data = await fetchData(value);
    return {
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
            windUnit: 'KPH',
        },
        imperial: {
            temp: data.current.temp_f,
            feelsLike: data.current.feelslike_f,
            wind: data.current.wind_mph,
            windUnit: 'MPH',
        },
        humidity: data.current.humidity,
        wind_dir: data.current.wind_dir,
    }
}
const data = createDataObject()



export function updateDetails(data) {

    const time = document.getElementById('time');
    const d = new Date(0);
    d.setUTCSeconds(data.location.local_time_epoch);
    time.textContent = `${d.getHours()}:${d.getMinutes()}`;

    const city = document.getElementById('city');
    city.textContent = data.location.city;

    const country = document.getElementById('country');
    country.textContent = data.location.country;

    const spanTemp = document.getElementById('temp');
    spanTemp.textContent = data.metric.temp;

    const spanHumidity = document.getElementById('humidity');
    spanHumidity.textContent = data.humidity;

    const spanWindage = document.getElementById('wind');
    spanWindage.textContent = data.metric.wind + data.metric.windUnit + ' ' + data.wind_dir;
}