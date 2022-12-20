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

const menu = ["Шоссе", "Грэвел", "ТТ"];

const swiperIntro = new Swiper(".swiper__types", {
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + menu[index] + "</span>";
		},
	},
	navigation: {
		nextEl: ".swiper__switch-btn_intro_next",
		prevEl: ".swiper__switch-btn_intro_prev",
	},
});
