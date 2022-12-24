const switchBtnArr = document.querySelectorAll(".mode__checkbox");
const formSubscription = document.querySelector(".footer__subscription-form");
const emailInput = document.querySelector(".footer__subscription-email");

function changeDarkMode(item) {
	if (item.checked) {
		document.body.classList.add("darkMode");
	} else {
		document.body.classList.remove("darkMode");
	}
}

function listenDarkMode(item) {
	item.addEventListener("change", () => changeDarkMode(item));
}

function writeCool() {
	emailInput.value = "Круто!";
}

function submitSubscription(evt) {
	evt.preventDefault();
	writeCool();
}

switchBtnArr.forEach(listenDarkMode);

formSubscription.addEventListener("submit", submitSubscription);
