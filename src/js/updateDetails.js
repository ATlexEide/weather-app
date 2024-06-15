
const rainfall = document.getElementById('rainfall');


export async function printData(dataObj) {
    const data = await dataObj;
    const radioC = document.getElementById('celcius');
    let unit;
    radioC.checked ? unit = 'metric' : unit = 'imperial';

    document.getElementById('weather-icon').setAttribute('src', data.condition.icon);
    document.getElementById('condition-text').textContent = data.condition.text;


    document.getElementById('time').textContent = 'Last update: ' + data.lastUpdate;
    document.getElementById('city').textContent = data.location.city;
    document.getElementById('country').textContent = data.location.country;
    changeUnits(dataObj);




    const compassWindDirText = document.getElementById('compass-wind-dir-text');
    compassWindDirText.textContent = data.wind_dir;
    const windDirIcon = document.getElementById('wind-dir-icon');
    data.wind_dir === 'N' ? windDirIcon.style.transform = 'rotate(0deg)' :
        data.wind_dir === 'NNE' ? windDirIcon.style.transform = 'rotate(22.5deg)' :
            data.wind_dir === 'NE' ? windDirIcon.style.transform = 'rotate(45deg)' :
                data.wind_dir === 'ENE' ? windDirIcon.style.transform = 'rotate(67.5deg)' :
                    data.wind_dir === 'E' ? windDirIcon.style.transform = 'rotate(90deg)' :
                        data.wind_dir === 'ESE' ? windDirIcon.style.transform = 'rotate(112.5deg)' :
                            data.wind_dir === 'SE' ? windDirIcon.style.transform = 'rotate(135deg)' :
                                data.wind_dir === 'SSE' ? windDirIcon.style.transform = 'rotate(157.5deg)' :
                                    data.wind_dir === 'S' ? windDirIcon.style.transform = 'rotate(180deg)' :
                                        data.wind_dir === 'SSW' ? windDirIcon.style.transform = 'rotate(202.5deg)' :
                                            data.wind_dir === 'SSW' ? windDirIcon.style.transform = 'rotate(202.5deg)' :
                                                data.wind_dir === 'SW' ? windDirIcon.style.transform = 'rotate(225.5deg)' :
                                                    data.wind_dir === 'WSW' ? windDirIcon.style.transform = 'rotate(247.5deg)' :
                                                        data.wind_dir === 'W' ? windDirIcon.style.transform = 'rotate(270deg)' :
                                                            data.wind_dir === 'WNW' ? windDirIcon.style.transform = 'rotate(292.5deg)' :
                                                                data.wind_dir === 'NW' ? windDirIcon.style.transform = 'rotate(315deg)' :
                                                                    data.wind_dir === 'NNW' ? windDirIcon.style.transform = 'rotate(337.5deg)' :
                                                                        console.log('Oopsie')
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
        document.getElementById('precipitation').textContent = data.metric.precipitation + data.metric.precipitationUnit;
    } else {
        document.getElementById('temp').textContent = data.imperial.temp + data.imperial.tempUnit;
        document.getElementById('humidity').textContent = data.humidity + '%';
        document.getElementById('wind').textContent = data.imperial.wind + data.imperial.windUnit + ' ' + data.wind_dir;
        document.getElementById('precipitation').textContent = data.imperial.precipitation + data.imperial.precipitationUnit;
    };
};

