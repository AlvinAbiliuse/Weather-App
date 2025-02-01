export default async function getData(locationQuery) {
	let key = "Y3NCRY3KKECRAVJVMRBG92VWC";
	let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationQuery}?key=${key}`;
	let response = await fetch(url);
	let data = await response.json();
	return data;
	//imgEl.src = images[data.currentConditions.icon.split("-").join("")];
}
