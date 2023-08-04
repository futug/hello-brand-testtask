// BURGER__MENU

const burger = document.querySelector(".burger-menu");
const burgerItems = document.querySelectorAll(".burger-menu__item");
const burgerItemsHor = document.querySelectorAll(".burger-menu__item-horizont");
const menuBody = document.querySelector(".header-menu");

burger.addEventListener("click", () => {
    burgerItems.forEach((item) => {
        item.classList.toggle("burger-menu__item--active");
    });

    burgerItemsHor.forEach((horItem) => {
        horItem.classList.toggle("burger-menu__item-horizont--active");
    });

    menuBody.classList.toggle("header-menu--active");
});

// BURGER__MENU

//MENU__OFFSET

(function () {
    const menuBlock = document.querySelector(".header-nav");
    const header = document.querySelector(".header");
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            menuBlock.classList.add("header-nav--active");
            header.classList.add("header--active");
        } else {
            menuBlock.classList.remove("header-nav--active");
            header.classList.remove("header--active");
        }
    };
})();

const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
    anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const blockID = anchor.getAttribute("href");
        document.querySelector("" + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
}

//MENU__OFFSET

//SLIDER
const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    centeredSlides: true,
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
});

//SLIDER

//POPUP

const reserveButton = document.querySelector(".hero__content-cta-button");
const popup = document.querySelector(".reserve__popup");

reserveButton.addEventListener("click", () => {
    popup.classList.add("reserve__popup--active");
    document.querySelector(".reserve__popup-form-close").addEventListener("click", () => {
        popup.classList.remove("reserve__popup--active");
    });
});

// AJAX

document.forms.reserveForm.onsubmit = function (e) {
    e.preventDefault();
    let nameInp = document.forms.reserveForm.name;
    let phoneInp = document.forms.reserveForm.phone;
    let emailInp = document.forms.reserveForm.email;
    let dateInp = document.forms.reserveForm.date;

    let xhr = new XMLHttpRequest();

    xhr.open("POST", "form.js");

    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            popup.classList.remove("reserve__popup--active");
            nameInp.value = "";
            phoneInp.value = "";
            emailInp.value = "";
            dateInp.value = "";
        } else {
            popup.classList.remove("reserve__popup--active");
            nameInp.value = "";
            phoneInp.value = "";
            emailInp.value = "";
            dateInp.value = "";
        }
    };

    xhr.send("name=" + nameInp.value + "&phone=" + phoneInp.value + "&email=" + emailInp.value + "&date=" + dateInp.value);
};
