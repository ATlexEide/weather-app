
const rainfall = document.getElementById('rainfall');


export async function printData(dataObj) {
    const data = await dataObj;
    const radioC = document.getElementById('celcius');
    let unit;
    radioC.checked ? unit = 'metric' : unit = 'imperial';

    document.getElementById('time').textContent = 'Last update: ' + data.lastUpdate;
    document.getElementById('city').textContent = data.location.city;
    document.getElementById('country').textContent = data.location.country;
    changeUnits(dataObj);
};

export async function changeUnits(dataObj) {
    const data = await dataObj;
    const radioC = document.getElementById('celcius');
    let unit;
    radioC.checked ? unit = 'metric' : unit = 'imperial';
    if (unit === 'metric') {
        document.getElementById('temp').textContent = data.metric.temp + data.metric.tempUnit;
        document.getElementById('humidity').textContent = data.humidity + '%';
        document.getElementById('wind').textContent = data.metric.wind + data.metric.windUnit + ' ' + data.wind_dir;
        document.getElementById('rainfall').textContent = data.metric.rainfall + data.metric.rainfallUnit;
    } else {
        document.getElementById('temp').textContent = data.imperial.temp + data.imperial.tempUnit;
        document.getElementById('humidity').textContent = data.humidity + '%';
        document.getElementById('wind').textContent = data.imperial.wind + data.imperial.windUnit + ' ' + data.wind_dir;
        document.getElementById('rainfall').textContent = data.imperial.rainfall + data.imperial.rainfallUnit;
    };
};