import createCards from "./createCard.js";

let topContainer = document.querySelector(".topContainer");
let mainContents = document.querySelector(".mainContents");

function mainCard(data, images) {
	let currentDate = data.days[0].datetime;
	console.log(data);
	let h2 = document.createElement("h2");
	h2.textContent = data.address;
	topContainer.appendChild(h2);
	topContainer.appendChild(createCards(data.currentConditions, images));
}

function collapsedCards(data, images) {
	let mainDiv = document.createElement("div");
	mainDiv.className = "mainDiv";
	for (let i in data.days) {
		mainDiv.appendChild(createCards(data.days[i], images));
	}

	mainContents.appendChild(mainDiv);
}
export function updatePage(data, images) {
	topContainer.innerHTML = "";
	mainContents.innerHTML = "";
	mainCard(data, images);
	collapsedCards(data, images);
	console.log(data);
}
