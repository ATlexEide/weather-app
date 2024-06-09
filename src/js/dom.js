const body = document.body;
const placeholderText = 'placeholder';


export function display() {
    // Display all elements
    drawHeader();
    drawMainContainer();
    drawFooter();
};

//
// Header
//
function drawHeader() {
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
function drawMainContainer() {
    // Container
    const div = document.createElement('div');
    div.id = 'main-container';
    drawInfoContainer(div);
    drawInputForm(div);

    // Append
    body.append(div);
};

//
// Footer
//
function drawFooter() {
    // Footer
    const footer = document.createElement('footer');
    footer.textContent = 'A TOP Project';

    // Appending
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
    drawUnitSelector(container)
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
    labelCelcius.textContent = 'C';

    containerC.appendChild(radioCelcius);
    containerC.appendChild(labelCelcius);

    const radioFahrenheit = document.createElement('input');
    radioFahrenheit.setAttribute('type', 'radio');
    radioFahrenheit.setAttribute('name', 'unit');
    radioFahrenheit.setAttribute('value', 'fahrenheit');
    radioFahrenheit.id = 'fahrenheit';
    const labelFahrenheit = document.createElement('label');
    labelFahrenheit.setAttribute('for', 'fahrenheit');
    labelFahrenheit.textContent = 'F';

    containerF.appendChild(radioFahrenheit);
    containerF.appendChild(labelFahrenheit);

    container.appendChild(containerC);
    container.appendChild(containerF);
    containingFunction.appendChild(container);
};


//
// Info Container
//
function drawInfoContainer(containingFunction) {
    // Info container
    const div = document.createElement('div');
    div.id = 'info-container';

    drawCityInfo(div);
    drawWeatherInfo(div);
    containingFunction.appendChild(div);
};

//
// City Info
//
function drawCityInfo(containingFunction) {
    const div = document.createElement('div');
    div.id = 'city-info'

    drawCityDetails(div);
    containingFunction.appendChild(div);
};

//
// City Details
//
function drawCityDetails(containingFunction) {
    // Container
    const name = document.createElement('div');
    name.id = 'city-name';
    name.textContent = placeholderText;
    const time = document.createElement('div');
    time.id = 'time';
    time.textContent = placeholderText;

    // Appending
    containingFunction.appendChild(name);
    containingFunction.appendChild(time);
};

//
// Weather info
//
function drawWeatherInfo(containingFunction) {
    const weatherContainer = document.createElement('div');
    weatherContainer.id = 'weather-info';
    const divCity = document.createElement('div');
    divCity.id = 'city-info';
    drawWeatherDetails(weatherContainer);
    drawGraph(weatherContainer);
    containingFunction.appendChild(weatherContainer);
};

//
// Weather Details
//
function drawWeatherDetails(containingFunction) {
    // Container
    const container = document.createElement('div');
    container.id = 'weather-details';

    // Temperature
    const divTemp = document.createElement('div');
    const labelTemp = document.createElement('label');
    labelTemp.setAttribute('for', 'temp');
    labelTemp.textContent = 'Temperature:';
    const spanTemp = document.createElement('span');
    spanTemp.id = 'temp';
    spanTemp.textContent = placeholderText;
    divTemp.appendChild(labelTemp);
    divTemp.appendChild(spanTemp);

    // Rainfall
    const divRainfall = document.createElement('div');
    const labelRainfall = document.createElement('label');
    labelRainfall.setAttribute('for', 'rainfall');
    labelRainfall.textContent = 'Rainfall:';
    const spanRainfall = document.createElement('span');
    spanRainfall.id = 'rainfall';
    spanRainfall.textContent = placeholderText;
    divRainfall.appendChild(labelRainfall);
    divRainfall.appendChild(spanRainfall);

    // Humidity
    const divHumidity = document.createElement('div');
    const labelHumidity = document.createElement('label');
    labelHumidity.setAttribute('for', 'humidity');
    labelHumidity.textContent = 'Humidity:';
    const spanHumidity = document.createElement('span');
    spanHumidity.id = 'humidity';
    spanHumidity.textContent = placeholderText;
    divHumidity.appendChild(labelHumidity);
    divHumidity.appendChild(spanHumidity);

    // Windage
    const divWindage = document.createElement('div');
    const labelWindage = document.createElement('label');
    labelWindage.setAttribute('for', 'windage');
    labelWindage.textContent = 'Windage:';
    const spanWindage = document.createElement('span');
    spanWindage.id = 'windage';
    spanWindage.textContent = placeholderText;
    divWindage.appendChild(labelWindage);
    divWindage.appendChild(spanWindage);

    // Main Appending
    containingFunction.appendChild(divTemp);
    containingFunction.appendChild(divRainfall);
    containingFunction.appendChild(divHumidity);
    containingFunction.appendChild(divWindage);
};

//
// Graph
//
function drawGraph(containingFunction) {
    // Graph
    const graph = document.createElement('div');
    graph.textContent = 'Graph? Maybe?';

    // Appending
    containingFunction.appendChild(graph);
};