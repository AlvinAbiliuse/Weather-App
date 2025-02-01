import { getData, images } from "./exports.js";

let data;

let imgEl = document.querySelector(".image");

let formEl = document.querySelector("form");
let input = formEl.querySelector("input");

formEl.addEventListener("submit", (e) => {
	data = getData(input.value);
	data.then((data) => console.log(data));
	input.value = "";
	e.preventDefault();
});
