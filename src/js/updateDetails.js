export function updateDetails(data) {
    const radioC = document.getElementById('celcius');
    let unit;
    radioC.checked ? unit = 'metric' : unit = 'imperial';


    const time = document.getElementById('time');
    time.textContent = 'Last update: ' + data.lastUpdate;

    const city = document.getElementById('city');
    city.textContent = data.location.city;

    const country = document.getElementById('country');
    country.textContent = data.location.country;

    const spanTemp = document.getElementById('temp');
    spanTemp.textContent = data[unit].temp + data[unit].tempUnit;

    const spanHumidity = document.getElementById('humidity');
    spanHumidity.textContent = data.humidity + '%';

    const spanWind = document.getElementById('wind');
    spanWind.textContent = data[unit].wind + data[unit].windUnit + ' ' + data.wind_dir;

    const rainfall = document.getElementById('rainfall');
    rainfall.textContent = data[unit].rainfall + data[unit].rainfallUnit;
}
