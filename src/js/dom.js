export const body = document.body;
const placeholderText = 'placeholder';


//
// Header
//
export function drawHeader() {
    // Header
    const header = document.createElement('header');
    // H1
    const h1 = document.createElement('h1');
    h1.textContent = 'Weather App';

    // Appending
    header.appendChild(h1);
    body.appendChild(header);
};

//
// Main container
//
export function drawMainContainer(data) {
    // Container
    const div = document.createElement('div');
    div.id = 'main-container';
    drawInfoContainer(div, data);
    drawInputForm(div);

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
    input.setAttribute('placeholder', 'Bergen');
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

    drawLocationInfo(div, data);
    drawWeatherInfo(div, data);
    containingFunction.appendChild(div);
};

//
// City Info
//
function drawLocationInfo(containingFunction, data) {
    const div = document.createElement('div');
    div.id = 'city-info';

    drawLocationDetails(div, data);
    containingFunction.appendChild(div);
};

//
// City Details
//
function drawLocationDetails(containingFunction, data) {
    // Container
    const locationInfo = document.createElement('div');
    locationInfo.id = 'location-info';

    const img = document.createElement('img');
    img.id = 'weather-icon';
    img.setAttribute('src', 'https://i.imgur.com/Qifgpbi.png');

    const conditionText = document.createElement('span');
    conditionText.id = 'condition-text';
    conditionText.textContent = 'Hello I\'m a placeholder';
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

    // Appending
    containingFunction.appendChild(img);
    locationInfo.appendChild(city);
    locationInfo.appendChild(country);
    containingFunction.appendChild(conditionText);
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

    // Rainfall
    const divRainfall = document.createElement('div');
    divRainfall.setAttribute('class', 'weather-details');
    const labelRainfall = document.createElement('label');
    labelRainfall.setAttribute('for', 'rainfall');
    labelRainfall.textContent = 'Rainfall: ';
    const spanRainfall = document.createElement('span');
    spanRainfall.id = 'rainfall';
    spanRainfall.textContent = '0mm';
    divRainfall.appendChild(labelRainfall);
    divRainfall.appendChild(spanRainfall);
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
    containingFunction.appendChild(divRainfall);
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