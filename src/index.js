console.log("hello world");
let key = "Y3NCRY3KKECRAVJVMRBG92VWC";
let locationQuery = "dubai";
let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationQuery}?key=${key}`;

async function getData() {
	let response = await fetch(url);
	let data = await response.json();
	console.log(data);
}

getData();
