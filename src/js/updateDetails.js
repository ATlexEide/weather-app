

export async function printData(dataObj, days = 3) {
    const data = await dataObj;
    const radioC = document.getElementById('celcius');
    let unit;
    radioC.checked ? unit = 'metric' : unit = 'imperial';

    document.getElementById('weather-icon').setAttribute('src', data.condition.icon);
    document.getElementById('condition-text').textContent = data.condition.text;


    document.getElementById('time').textContent = 'Last update: ' + data.lastUpdate;
    document.getElementById('city').textContent = data.location.city;
    document.getElementById('country').textContent = data.location.country;
    if (data.location.city.length > 10) { document.getElementById('city').style.fontSize = '34px'; document.getElementById('country').style.fontSize = '24px' }
    else { document.getElementById('city').style.fontSize = '58px'; document.getElementById('country').style.fontSize = '34px' };
    changeUnits(dataObj);




    const compassWindDirText = document.getElementById('compass-wind-dir-text');
    compassWindDirText.textContent = data.wind_dir;
    const windDirIcon = document.getElementById('wind-dir-icon');
    if (data.wind_dir === 'N') { windDirIcon.style.transform = 'rotate(0deg)' };
    if (data.wind_dir === 'NNE') { windDirIcon.style.transform = 'rotate(22.5deg)' };
    if (data.wind_dir === 'NE') { windDirIcon.style.transform = 'rotate(45deg)' };
    if (data.wind_dir === 'ENE') { windDirIcon.style.transform = 'rotate(67.5deg)' };
    if (data.wind_dir === 'E') { windDirIcon.style.transform = 'rotate(90deg)' };
    if (data.wind_dir === 'ESE') { windDirIcon.style.transform = 'rotate(112.5deg)' };
    if (data.wind_dir === 'SE') { windDirIcon.style.transform = 'rotate(135deg)' };
    if (data.wind_dir === 'SSE') { windDirIcon.style.transform = 'rotate(157.5deg)' };
    if (data.wind_dir === 'S') { windDirIcon.style.transform = 'rotate(180deg)' };
    if (data.wind_dir === 'SSW') { windDirIcon.style.transform = 'rotate(202.5deg)' };
    if (data.wind_dir === 'SSW') { windDirIcon.style.transform = 'rotate(202.5deg)' };
    if (data.wind_dir === 'SW') { windDirIcon.style.transform = 'rotate(225.5deg)' };
    if (data.wind_dir === 'WSW') { windDirIcon.style.transform = 'rotate(247.5deg)' };
    if (data.wind_dir === 'W') { windDirIcon.style.transform = 'rotate(270deg)' };
    if (data.wind_dir === 'WNW') { windDirIcon.style.transform = 'rotate(292.5deg)' };
    if (data.wind_dir === 'NW') { windDirIcon.style.transform = 'rotate(315deg)' };
    if (data.wind_dir === 'NNW') { windDirIcon.style.transform = 'rotate(337.5deg)' };


    for (let i = 0; i < days; i++) {
        document.getElementById(`forecast-icon-${i}`).src = data.forecast[i].condition.icon;
        console.log('Temp: ', data.forecast[i][`${unit}Max`])
        document.getElementById(`${i}-date`).textContent = data.forecast[i].date;
        document.getElementById(`${0}-date`).textContent = 'Tomorrow';
        document.getElementById(`${i}-humidity`).textContent = 'Humidity: ' + data.forecast[i].humidity + '%';
    }

};

export async function changeUnits(dataObj) {
    const data = await dataObj;
    const radioC = document.getElementById('celcius');
    let unit;
    radioC.checked ? unit = 'metric' : unit = 'imperial';
    document.getElementById('temp').textContent = data[unit].temp + data[unit].tempUnit;
    document.getElementById('humidity').textContent = data.humidity + '%';
    document.getElementById('wind').textContent = data[unit].wind + data[unit].windUnit + ' ' + data.wind_dir;
    document.getElementById('precipitation').textContent = data[unit].precipitation + data[unit].precipitationUnit;
    for (let i = 0; i < data.forecast.length; i++) {
        document.getElementById(`${i}-temp`).textContent = data.forecast[i][`${unit}Max`] + data[unit].tempUnit + ' / ' + data.forecast[i][`${unit}Min`] + data[unit].tempUnit;
        document.getElementById(`${i}-precipitation`).textContent = 'Precipitation: ' + data.forecast[i][`${unit}Precipitation`] + data[unit].precipitationUnit;
    };
};