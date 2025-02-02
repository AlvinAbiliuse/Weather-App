export default function createCards(data, images) {
	let card = document.createElement("div");
	card.className = "card";
	let leftContents = document.createElement("div");
	let rightContents = document.createElement("div");
	leftContents.className = "leftContents";
	rightContents.className = "rightContents";
	let date = document.createElement("h3");
	let conditions = document.createElement("p");
	let temp = document.createElement("p");
	let currentDate = Date.now();
	if (new Date(data.datetime) == "Invalid Date") {
		date.textContent = "Time: " + data.datetime;
	} else {
		date.textContent = "Date: " + new Date(data.datetime);
	}
	/*data.datetimeEpoch);*/
	conditions.textContent = "Conditions: " + data.conditions;
	temp.textContent = "Temperature: " + data.temp + " ℉";

	leftContents.appendChild(date);
	leftContents.appendChild(conditions);
	leftContents.appendChild(temp);

	let img = document.createElement("img");
	img.src = images[data.icon.split("-").join("")];

	rightContents.appendChild(img);

	card.appendChild(leftContents);
	card.appendChild(rightContents);
	return card;
}
