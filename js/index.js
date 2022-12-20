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

const swiperIntro = new Swiper(".swiper__types", {
	loop: true,
	// pagination: {
	// 	el: ".swiper__pagination_intro",
	// 	bulletClass: "swiper-pagination-bullet swiper-pagination-intro-bullet",
	// 	bulletActiveClass: "swiper-pagination-intro-bullet-active",
	// },
	// navigation: {
	// 	nextEl: ".swiper__switch-btn_intro_next",
	// 	prevEl: ".swiper__switch-btn_intro_prev",
	// },
	// autoplay: {
	// 	delay: 10000,
	// 	stopOnLastSlide: false,
	// 	disableOnInteraction: false,
	// },
});
