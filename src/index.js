import images from "./exports.js";

let key = "Y3NCRY3KKECRAVJVMRBG92VWC";
let locationQuery = "dubai";
let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationQuery}?key=${key}`;

let data;
async function getData() {
	let response = await fetch(url);
	data = await response.json();
	//imgEl.src = images[data.currentConditions.icon.split("-").join("")];
}

let imgEl = document.querySelector(".image");

// getData();
