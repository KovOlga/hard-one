const mobileMenuBtn = document.querySelector(".header__mobile-lines-button");
const mobileContainer = document.querySelector(".header__mobile-container");
const mobileMenuCloseBtn = document.querySelector(
	".header__mobile-close-button"
);

mobileMenuBtn.addEventListener("click", () => {
	mobileContainer.classList.add("header__mobile-container_opened");
});
mobileMenuCloseBtn.addEventListener("click", () => {
	mobileContainer.classList.remove("header__mobile-container_opened");
});
