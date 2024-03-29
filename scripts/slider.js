const swiperTypes = new Swiper(".slider-types", {
	loop: false,
	navigation: {
		nextEl: ".swiper__switch-btn_intro_next",
		prevEl: ".swiper__switch-btn_intro_prev",
	},
	slidesPerView: 1,
});

const menu = ["Шоссе", "Грэвел", "ТТ"];
const swiperCycles = new Swiper(".slider-cycles", {
	pagination: {
		el: ".slider-cycles__swiper-pagination",
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + menu[index] + "</span>";
		},
	},
	slidesPerView: 1,
});

const sliderSelectShosse = new Swiper(
	".slider-cycles-select__container_type_shosse",
	{
		pagination: {
			el: ".slider-cycles-select__pagination",
			type: "bullets",
			clickable: true,
		},
		slidesPerView: 1,
	}
);

const sliderSelectGrevel = new Swiper(
	".slider-cycles-select__container_type_grevel",
	{
		pagination: {
			el: ".slider-cycles-select__pagination",
			type: "bullets",
			clickable: true,
		},
		slidesPerView: 1,
	}
);

const sliderSelectTt = new Swiper(".slider-cycles-select__container_type_tt", {
	pagination: {
		el: ".slider-cycles-select__pagination",
		type: "bullets",
		clickable: true,
	},
	slidesPerView: 1,
});

const typeSelect = document.querySelector(".slider-cycles-select__selects");

const typeShosse = document.querySelector(
	".slider-cycles-select__container_type_shosse"
);
const typeGrevel = document.querySelector(
	".slider-cycles-select__container_type_grevel"
);
const typeTt = document.querySelector(
	".slider-cycles-select__container_type_tt"
);

function closeSlider(elementOne, elementTwo) {
	elementOne.classList.add("slider-cycles-select__container_closed");
	elementTwo.classList.add("slider-cycles-select__container_closed");
	elementOne.classList.remove("slider-cycles-select__container_opened");
	elementTwo.classList.remove("slider-cycles-select__container_opened");
}

function openSlider(element) {
	element.classList.remove("slider-cycles-select__container_closed");
	element.classList.add("slider-cycles-select__container_opened");
}

function updateSlider() {
	if (typeSelect.value === "grevel") {
		closeSlider(typeShosse, typeTt);
		openSlider(typeGrevel);
	} else if (typeSelect.value === "tt") {
		closeSlider(typeShosse, typeGrevel);
		openSlider(typeTt);
	} else if (typeSelect.value === "shosse") {
		closeSlider(typeGrevel, typeTt);
		openSlider(typeShosse);
	}
}

typeSelect.addEventListener("change", updateSlider);
