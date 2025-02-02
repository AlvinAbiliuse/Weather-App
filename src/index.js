import { updatePage, getData, images } from "./exports.js";
let data;

let imgEl = document.querySelector(".image");

let formEl = document.querySelector("form");
let input = formEl.querySelector("input");

formEl.addEventListener("submit", (e) => {
	document.querySelector(".loader").className = "loader";
	data = getData(input.value);
	data
		.then((data) => updatePage(data, images))
		.then(() => {
			document.querySelector(".loader").className = "loader hidden";
		});
	input.value = "";
	e.preventDefault();
});
