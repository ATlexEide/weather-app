// const compass = 'https://i.imgur.com/SH5AKLq.png';
const N = '';
const NW = '';
const NE = '';
const S = '';
const SW = '';
const SE = '';
const W = '';
const E = '';


export const body = document.body;
const placeholderText = 'placeholder';


//
// Header
//


//
// Main container
//
export function drawMainContainer(data) {
    const header = document.createElement('header');
    // H1
    const h1 = document.createElement('h1');
    h1.textContent = 'Cloudsdale Weather Report';

    // Appending
    header.appendChild(h1);
    // Container
    const div = document.createElement('div');
    div.id = 'main-container';
    div.appendChild(header);
    drawInfoContainer(div, data);
    drawInputForm(div);
    drawForecast(div)

    // Append
    body.append(div);
};

//
// Footer
//
export function drawFooter() {
    // Footer
    const footer = document.createElement('footer');
    const span = document.createElement('span');
    const a = document.createElement('a');
    a.id = 'link-back'
    a.setAttribute('href', 'https://www.weatherapi.com/');
    a.setAttribute('title', 'Free Weather API');
    a.textContent = 'WeatherAPI.com'
    span.textContent = `A TOP Project | Powered by `

    // Appending
    span.appendChild(a)
    footer.appendChild(span)
    body.appendChild(footer);
};

//
// Input Form
//
function drawInputForm(containingFunction) {
    // Container
    const container = document.createElement('div');
    container.id = 'input-container';
    // Form
    const form = document.createElement('form');
    form.id = 'search-bar'
    // Input
    const input = document.createElement('input');
    input.id = 'input-location';
    input.setAttribute('placeholder', 'Search for location');
    // Button
    const btn = document.createElement('button');
    btn.id = 'submit-location';
    btn.textContent = 'Search';

    //Appending
    drawUnitSelector(container);
    form.appendChild(input);
    form.appendChild(btn);
    container.appendChild(form);
    containingFunction.appendChild(container);
};

//
// Unit selector
//
function drawUnitSelector(containingFunction) {
    const container = document.createElement('div');
    container.id = 'radio-container';
    const containerC = document.createElement('div');
    containerC.id = 'radio-celcius';
    const containerF = document.createElement('div');
    containerF.id = 'radio-fahrenheit';


    const radioCelcius = document.createElement('input');
    radioCelcius.setAttribute('type', 'radio');
    radioCelcius.setAttribute('name', 'unit');
    radioCelcius.setAttribute('value', 'celcius');
    radioCelcius.setAttribute('checked', 'checked');
    radioCelcius.id = 'celcius';
    const labelCelcius = document.createElement('label');
    labelCelcius.setAttribute('for', 'celcius');
    labelCelcius.textContent = 'Metric';

    containerC.appendChild(radioCelcius);
    containerC.appendChild(labelCelcius);

    const radioFahrenheit = document.createElement('input');
    radioFahrenheit.setAttribute('type', 'radio');
    radioFahrenheit.setAttribute('name', 'unit');
    radioFahrenheit.setAttribute('value', 'fahrenheit');
    radioFahrenheit.id = 'fahrenheit';
    const labelFahrenheit = document.createElement('label');
    labelFahrenheit.setAttribute('for', 'fahrenheit');
    labelFahrenheit.textContent = 'Imperial';

    containerF.appendChild(radioFahrenheit);
    containerF.appendChild(labelFahrenheit);

    container.appendChild(containerC);
    container.appendChild(containerF);
    containingFunction.appendChild(container);
};


//
// Info Container
//
function drawInfoContainer(containingFunction, data) {
    // Info container
    const div = document.createElement('div');
    div.id = 'info-container';
    const weatherConditions = document.createElement('div');
    weatherConditions.id = 'weather-conditions';
    const weatherIcon = document.createElement('img');
    weatherIcon.id = 'weather-icon';
    weatherIcon.setAttribute('src', '//cdn.weatherapi.com/weather/64x64/day/113.png');

    const conditionText = document.createElement('span');
    conditionText.id = 'condition-text';
    conditionText.textContent = 'Sunny';

    const compassContainer = document.createElement('div');
    compassContainer.id = 'compass-container';
    const compassBody = document.createElement('img');
    compassBody.id = 'compass-body';
    compassBody.src = 'https://i.imgur.com/SH5AKLq.png';
    const compassWindDirIcon = document.createElement('img');
    compassWindDirIcon.id = 'wind-dir-icon'
    compassWindDirIcon.src = 'https://i.imgur.com/ID05YeQ.png';
    const compassWindDirText = document.createElement('div');
    compassWindDirText.id = 'compass-wind-dir-text';
    compassWindDirText.textContent = 'N';

    compassContainer.appendChild(compassBody);
    compassContainer.appendChild(compassWindDirIcon)
    compassContainer.appendChild(compassWindDirText)

    weatherConditions.appendChild(weatherIcon)
    weatherConditions.appendChild(conditionText)
    weatherConditions.appendChild(compassContainer)
    drawLocationInfo(div, data);
    drawWeatherInfo(div, data);
    div.appendChild(weatherConditions)
    containingFunction.appendChild(div);
};
function drawForecast(containingFunction, days = 3) {
    const forecastContainer = document.createElement('div');
    forecastContainer.id = 'forecast';
    for (let i = 0; i < days; i++) {
        const day = document.createElement('div');
        day.id = `day-${i}`;
        const icon = document.createElement('img');
        icon.id = `forecast-icon-${i}`;
        icon.src = ''
        const date = document.createElement('div');
        date.id = `${i}-date`;
        const temp = document.createElement('div');
        temp.id = `${i}-temp`;
        const precipitation = document.createElement('div');
        precipitation.id = `${i}-precipitation`
        const humidity = document.createElement('div');
        humidity.id = `${i}-humidity`;
        day.appendChild(icon);
        day.appendChild(date);
        day.appendChild(temp);
        day.appendChild(precipitation)
        day.appendChild(humidity)

        forecastContainer.appendChild(day)
    };


    // Appending
    containingFunction.appendChild(forecastContainer);
};
//
// City Info
//
function drawLocationInfo(containingFunction, data) {
    const div = document.createElement('div');
    div.id = 'city-info';
    containingFunction.appendChild(div);
    drawLocationDetails(div, data)
};

//
// City Details
//
function drawLocationDetails(containingFunction, data) {
    // Container


    const locationInfo = document.createElement('div');
    locationInfo.id = 'location-info';








    const city = document.createElement('div');
    city.setAttribute('class', 'city-details');
    city.id = 'city';
    city.textContent = 'Ponyville';
    const country = document.createElement('div');
    country.setAttribute('class', 'city-details');
    country.id = 'country';
    country.textContent = 'Equestria';
    const time = document.createElement('div');
    time.id = 'time';
    time.textContent = '';

    //

    //
    //
    locationInfo.appendChild(city);
    locationInfo.appendChild(country);
    //
    containingFunction.appendChild(locationInfo);
    containingFunction.appendChild(time);
};

//
// Weather info
//
function drawWeatherInfo(containingFunction, data) {
    const weatherContainer = document.createElement('div');
    weatherContainer.id = 'weather-info';
    const divCity = document.createElement('div');
    divCity.id = 'city-info';
    drawWeatherDetails(weatherContainer, data);
    drawGraph(weatherContainer);
    containingFunction.appendChild(weatherContainer);
};

//
// Weather Details
//
function drawWeatherDetails(containingFunction, data) {
    // Container
    const container = document.createElement('div');
    container.id = 'weather-details';

    // Temperature
    const divTemp = document.createElement('div');
    divTemp.setAttribute('class', 'weather-details');
    const labelTemp = document.createElement('label');
    labelTemp.setAttribute('for', 'temp');
    labelTemp.textContent = 'Temperature: ';
    const spanTemp = document.createElement('span');
    spanTemp.id = 'temp';
    spanTemp.textContent = '30°C';
    divTemp.appendChild(labelTemp);
    divTemp.appendChild(spanTemp);

    // Precipitation
    const divPrecipitation = document.createElement('div');
    divPrecipitation.setAttribute('class', 'weather-details');
    const labelPrecipitation = document.createElement('label');
    labelPrecipitation.setAttribute('for', 'precipitation');
    labelPrecipitation.textContent = 'Precipitation: ';
    const spanPrecipitation = document.createElement('span');
    spanPrecipitation.id = 'precipitation';
    spanPrecipitation.textContent = '0mm';
    divPrecipitation.appendChild(labelPrecipitation);
    divPrecipitation.appendChild(spanPrecipitation);
    // Humidity
    const divHumidity = document.createElement('div');
    divHumidity.setAttribute('class', 'weather-details');
    const labelHumidity = document.createElement('label');
    labelHumidity.setAttribute('for', 'humidity');
    labelHumidity.textContent = 'Humidity: ';
    const spanHumidity = document.createElement('span');
    spanHumidity.id = 'humidity';
    spanHumidity.textContent = '31%';
    divHumidity.appendChild(labelHumidity);
    divHumidity.appendChild(spanHumidity);

    // Wind
    const divWind = document.createElement('div');
    divWind.setAttribute('class', 'weather-details');
    const labelWind = document.createElement('label');
    labelWind.setAttribute('for', 'wind');
    labelWind.textContent = 'Wind: ';
    const spanWind = document.createElement('span');
    spanWind.id = 'wind';
    spanWind.textContent = '1 m/s';
    divWind.appendChild(labelWind);
    divWind.appendChild(spanWind);
    // Uv
    const divUv = document.createElement('div');
    divUv.setAttribute('class', 'weather-details');
    const labelUv = document.createElement('label');
    labelUv.setAttribute('for', 'uv');
    labelUv.textContent = 'Uv: ';
    const spanUv = document.createElement('span');
    spanUv.id = 'uv';
    spanUv.textContent = '0';
    divUv.appendChild(labelUv);
    divUv.appendChild(spanUv);

    // Main Appending
    containingFunction.appendChild(divTemp);
    containingFunction.appendChild(divPrecipitation);
    containingFunction.appendChild(divHumidity);
    containingFunction.appendChild(divWind);
};

//
// Graph
//
function drawGraph(containingFunction) {
    // Graph
    const graph = document.createElement('div');
    graph.id = 'graph';
    graph.textContent = 'Graph? Maybe?';

    // Appending
    containingFunction.appendChild(graph);
};