export function updateDetails(data) {

    const time = document.getElementById('time');
    const d = new Date(0);
    d.setUTCSeconds(data.location.time_epoch);
    time.textContent = `${d.getHours()}:${d.getMinutes()}`;

    const city = document.getElementById('city');
    city.textContent = data.location.city;

    const country = document.getElementById('country');
    country.textContent = data.location.country;

    const spanTemp = document.getElementById('temp');
    spanTemp.textContent = data.metric.temp;

    const spanHumidity = document.getElementById('humidity');
    spanHumidity.textContent = data.humidity + '%';

    const spanWind = document.getElementById('wind');
    spanWind.textContent = data.metric.wind + data.metric.windUnit + ' ' + data.wind_dir;

    const rainfall = document.getElementById('rainfall');
    rainfall.textContent = data.rainfall_mm + 'mm';
}
