let decrementBtn = document.getElementById("decrementBtn");
let showCount = document.getElementById("showCount");
let incrementBtn = document.getElementById("incrementBtn");
let resetValue = document.getElementById("resetValue");

function updateCountColor() {
	if (showCount.innerText < 0) {
		showCount.style.color = "red";
	} else if (showCount.innerText > 0) {
		showCount.style.color = "green";
	} else {
		showCount.style.color = "black";
	}
}

decrementBtn.addEventListener("click", () => {
	let counter = Number(showCount.innerText);
	showCount.innerText = counter - 1;
	updateCountColor();
});
incrementBtn.addEventListener("click", () => {
	let counter = Number(showCount.innerText);
	showCount.innerText = counter + 1;
	updateCountColor();
});
resetValue.addEventListener("click", () => {
	showCount.innerText = 0;
	updateCountColor();
});
