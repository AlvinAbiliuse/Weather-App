let div = document.querySelector(".mainDiv");

function toggle(path) {
	console.log(path);
	path.classList.toggle("hidden");
}

export function dropdown() {
	let dropDownBtn = document.querySelector(".showMore");
	dropDownBtn.addEventListener("click", () => toggle(div));
}
