// Input Number
const num = 20;

// Select elements
const feetNum = document.querySelector("#feet-num");
const metersNum = document.querySelector("#meters-num");
const gallonsNum = document.querySelector("#gallons-num");
const litersNum = document.querySelector("#liters-num");
const poundsNum = document.querySelector("#pounds-num");
const kilosNum = document.querySelector("#kilos-num");
const btn = document.querySelector("button");

// Select elements to inster master num
const masterNum1 = document.querySelector("#master-num1");
const masterNum2 = document.querySelector("#master-num2");
const masterNum3 = document.querySelector("#master-num3");
const masterNum4 = document.querySelector("#master-num4");
const masterNum5 = document.querySelector("#master-num5");
const masterNum6 = document.querySelector("#master-num6");

// Give each master num value the value of num
masterNum1.textContent = num;
masterNum2.textContent = num;
masterNum3.textContent = num;
masterNum4.textContent = num;
masterNum5.textContent = num;
masterNum6.textContent = num;

// Meters to feet, vice versa
function metersToFeet() {
  const feet = (num * 3.281).toFixed(3);
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

// Call conversion functions, add a 'click' event listener
btn.addEventListener("click", () => {
  metersToFeet();
  feetToMeters();
  gallonsToLiters();
  litersToGallons();
  poundsToKilos();
  kilosToPounds();
});
