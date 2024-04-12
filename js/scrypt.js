"use strict";

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let footerMenuArrows = document.querySelectorAll('.footer-block__arrow');
    if (footerMenuArrows.length > 0) {
        for (let index = 0; index < footerMenuArrows.length; index++) {
            const footerMenuArrow = footerMenuArrows[index];
            footerMenuArrow.addEventListener("click", function (e) {
                footerMenuArrow.parentElement.classList.toggle('_open');
            });
        }
    }

}
else {
    document.body.classList.add('_pc');
}

// Menu Burger

const menuIcon = document.querySelector('.header-icons__menu');
const menuBody = document.querySelector('.menu');
const headerCart = document.querySelector('.header-icons__cart');
const slider = document.querySelector('.swiper-container');

if (menuIcon) {
    menuIcon.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        menuIcon.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        headerCart.classList.toggle('_active');
        slider.classList.toggle('_active');
    });
}

// Инициализируем Swiper

new Swiper('.ingredients-slider', {

    spaceBetween: 8.6,

    simulateTouch: false,

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    direction: 'vertical',

    grabCursor: true,

    Keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    mousewheel: {
        eventTarget: ".ingredients-slider",
    },

    slidesPerView: 3,

    slidesPerGroup: 1,

    watchOverflow: true,

    centerInsufficientSlides: true,

    centeredSlides: true,

    //centeredSlidesBounds: true,

    centeredSlides: true,

    initialSlide: 1,

});

// Footer Menu

// const menuHeader = document.querySelectorAll('.footer-block__header');
// const menuContent = document.querySelectorAll('.footer-block__subcontent');

// if (menuHeader) {
//     menuHeader.addEventListener("click", function (e) {
//         menuHeader.classList.toggle('_open');
//         menuContent.classList.toggle('_open');
//     });
// }