// Input Number
const num = 20;

// Select elements
const feetNum = document.querySelector("#feet-num");
const metersNum = document.querySelector("#meters-num");
const gallonsNum = document.querySelector("#gallons-num");
const litersNum = document.querySelector("#liters-num");
const poundsNum = document.querySelector("#pounds-num");
const kilosNum = document.querySelector("#kilos-num");


// Meters to feet, vice versa
function metersToFeet() {
    const feet = (num * 3.281).toFixed(3); // change so it outputs to 3 decimal places
    feetNum.textContent = feet;
}

function feetToMeters() {
    const meters = (num / 3.281).toFixed(3);
    metersNum.textContent = meters;
}

// Liters to gallons, vice versa
function gallonsToLiters() {
    const liters = (num * 3.785).toFixed(3);
    litersNum.textContent = liters;
}

function litersToGallons() {
    const gallons = (num / 3.785).toFixed(3);
    gallonsNum.textContent = gallons;
}

// Kilos to pounds, vice versa
function kilosToPounds() {
    const pounds = (num * 2.205).toFixed(3);
    poundsNum.textContent = pounds;
}

function poundsToKilos() {
    const kilos = (num / 2.205).toFixed(3);
    kilosNum.textContent = kilos;
}

// Call conversion functions
metersToFeet();
feetToMeters();
gallonsToLiters();
litersToGallons();
poundsToKilos();
kilosToPounds();