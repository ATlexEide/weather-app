// const API_KEY = '72f920ddfbf143c9ac1164854240606';
import '../css/style.css';
import { drawHeader } from './dom.js'
import { drawMainContainer } from './dom.js'
import { drawFooter } from './dom.js'
import { updateDetails } from './updateDetails.js';


(function display() {
    drawHeader();
    drawMainContainer();
    drawFooter();
}
)();

const input = document.getElementById('input-location');
const submit = document.getElementById('submit-location');
submit.addEventListener('click', () => {
    const inputText = input.value;

    alert(inputText)
})


const searchInput = document.getElementById('input-location');
const value = searchInput.value;
const location = () => { if (!value) { return 'bergen' } else { return value } }

export async function fetchData(location) {
    try {
        const request = await fetch(`http://api.weatherapi.com/v1/current.json?key=72f920ddfbf143c9ac1164854240606&q=${location}`, { type: 'cors' });
        const response = await request.json();
        return response
    } catch (error) {
        console.log('oopsie, we got an error UWU  ' + error)
    }
}