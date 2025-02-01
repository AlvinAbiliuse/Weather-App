let topContainer = document.querySelector(".topContainer");
let mainContents = document.querySelector(".mainContents");

function createCards(data, images) {
	let card = document.createElement("div");
	card.className = "card";
	let leftContents = document.createElement("div");
	let rightContents = document.createElement("div");
	leftContents.className = "leftContents";
	rightContents.className = "rightContents";
	let h3 = document.createElement("h3");
	let datetime = document.createElement("p");
	let temp = document.createElement("p");

	h3.textContent = "Conditions: " + data.conditions;
	datetime.textContent = new Date(data.datetimeEpoch);
	temp.textContent = "Temperature: " + data.temp;

	leftContents.appendChild(h3);
	leftContents.appendChild(datetime);
	leftContents.appendChild(temp);

	let img = document.createElement("img");
	img.src = images[data.icon.split("-").join("")];

	rightContents.appendChild(img);

	card.appendChild(leftContents);
	card.appendChild(rightContents);
	return card;
}

function mainCard(data, images) {
	let h2 = document.createElement("h2");
	h2.textContent = data.address;
	topContainer.appendChild(h2);
	topContainer.appendChild(createCards(data.currentConditions, images));
}

function collapsedCards(data, images) {
	let openBtn = document.createElement("button");
	openBtn.value = "show more";
	openBtn.className = "showMore";
	mainContents.appendChild(openBtn);

	let mainDiv = document.createElement("div");
	mainDiv.className = "hidden";
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
}
