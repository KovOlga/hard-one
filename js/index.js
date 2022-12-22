// const userDarkMode = localStorage.getItem("darkMode");
const switchBtn = document.querySelector(".mode__checkbox");

function changeDarkMode() {
	if (switchBtn.checked) {
		document.body.classList.add("darkMode");
	} else {
		document.body.classList.remove("darkMode");
	}
}

switchBtn.addEventListener("change", changeDarkMode);

const menu = ["Шоссе", "Грэвел", "ТТ"];

const swiperTypes = new Swiper(".slider-types", {
	loop: false,
	navigation: {
		nextEl: ".swiper__switch-btn_intro_next",
		prevEl: ".swiper__switch-btn_intro_prev",
	},
	slidesPerView: 1,
});

const swiperCycles = new Swiper(".swiper__cycles", {
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + menu[index] + "</span>";
		},
	},
	slidesPerView: 1,
});

const formSubscription = document.querySelector(".footer__subscription-form");
const emailInput = document.querySelector(".footer__subscription-email");

function writeCool() {
	emailInput.value = "Круто!";
}

function submitSubscription(evt) {
	evt.preventDefault();
	writeCool();
}

formSubscription.addEventListener("submit", submitSubscription);
