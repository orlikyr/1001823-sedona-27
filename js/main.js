
var button = document.querySelector("#search-modal");
var popup = document.querySelector(".appointment-form");
var arrival = popup.querySelector("[name=arrival-date]");
var departure = popup.querySelector("[name=departure-date]");
var adults = popup.querySelector("[name=adults]");
var children = popup.querySelector("[name=children]");

popup.classList.add("form-none");

button.addEventListener("click", function () {
	if (popup.classList.contains("form-none")) {
		popup.classList.remove("form-none");
		popup.classList.add("form-show");
	} else {
		popup.classList.remove("form-show");
		popup.classList.add("form-none");
		popup.classList.remove("form-error");
	}
});

popup.addEventListener("submit", function (evt) {
	if (!arrival.value || !departure.value || !adults.value || !children.value) {
		evt.preventDefault();
		popup.classList.remove("form-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("form-error");
		console.log("Нужно заполнить все поля");
	}
});