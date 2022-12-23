// const userDarkMode = localStorage.getItem("darkMode");
const switchBtn = document.querySelector(".mode__checkbox");
const formSubscription = document.querySelector(".footer__subscription-form");
const emailInput = document.querySelector(".footer__subscription-email");

function changeDarkMode() {
	if (switchBtn.checked) {
		document.body.classList.add("darkMode");
	} else {
		document.body.classList.remove("darkMode");
	}
}

function writeCool() {
	emailInput.value = "Круто!";
}

function submitSubscription(evt) {
	evt.preventDefault();
	writeCool();
}

switchBtn.addEventListener("change", changeDarkMode);
formSubscription.addEventListener("submit", submitSubscription);
