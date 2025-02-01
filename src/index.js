import images from "./exports.js";

let data;

async function getData(locationQuery) {
	let key = "Y3NCRY3KKECRAVJVMRBG92VWC";
	let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationQuery}?key=${key}`;
	let response = await fetch(url);
	data = await response.json();
	return data;
	//imgEl.src = images[data.currentConditions.icon.split("-").join("")];
}

let imgEl = document.querySelector(".image");

let formEl = document.querySelector("form");
let input = formEl.querySelector("input");

formEl.addEventListener("submit", (e) => {
	data = getData(input.value);
	data.then((data) => console.log(data));
	input.value = "";
	e.preventDefault();
});
