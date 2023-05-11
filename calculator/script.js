let inbox = document.getElementById("inbox");

let buttons = document.querySelectorAll("button");

let string = "";

let inputValue = Array.from(buttons);

inputValue.forEach((button) => {
	button.addEventListener("click", (e) => {
		if (e.target.innerHTML == "=") {
			string = eval(string);
			inbox.value = string;
		} else if (e.target.innerHTML == "AC") {
			string = "";
			inbox.value = string;
		} else if (e.target.innerHTML == "DL") {
			string = string.substring(0, string.length - 1);
			inbox.value = string;
		} else {
			string += e.target.innerHTML;
			inbox.value = string;
		}
	});
});
