let topContainer = document.querySelector(".topContainer");
let mainContents = document.querySelector(".mainContents");

function createCards(data) {
	let card = document.createElement("div");
	card.className = "card";
	let h2 = document.createElement("h2");
	let p = document.createElement("p");
	return card;
}
function mainCard(data, images) {
	topContainer.appendChild(createCards(data, images));
}

function collapsedCards(data, images) {
	let openBtn = document.createElement("button");
	openBtn.value = "show more";
	openBtn.className = "showMore";
	mainContents.appendChild(openBtn);
	let mainDiv = document.createElement("div");
	mainDiv.className = "hidden";
	for (let i in data.days) {
		mainDiv.appendChild(createCard(data.days[i], images));
	}
	mainContents.appendChild(mainDiv);
}

export function updatePage(data, images) {
	topContainer.innerHTML = "";
	mainContents.innerHTML = "";
	mainCard(data, images);
	collapsedCards(data, images);
}
