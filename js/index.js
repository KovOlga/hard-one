// const userDarkMode = localStorage.getItem("darkMode");
const switchBtn = document.querySelector(".switch");

function changeDarkMode() {
	if (switchBtn.checked) {
		console.log(switchBtn.checked);
		document.body.classList.add("darkMode");
	} else {
		document.body.classList.remove("darkMode");
	}
}

switchBtn.addEventListener("change", changeDarkMode);
