'use strict'

//работа буркер кнопки
const headerLinks = document.querySelectorAll('.header-menu__link');
const burgerSpans = document.querySelectorAll('.burger__button span');

document.addEventListener('click', function (event) {
    if (event.target.closest('.burger__button')) {
        //если кнопочка активна
        if (headerLinks[0].classList.contains('header-menu__link-active')) {
            for (let el of burgerSpans) {
                el.style.cssText = '';
            };
        } else {
            burgerSpans[0].style.cssText = `transform:rotate(45deg);
        top:34px;`;
            burgerSpans[1].style.display = 'none';
            burgerSpans[2].style.cssText = `transform:rotate(-45deg);
        top:34px;`;
        };
        //при клике
        for (let el of headerLinks) {
            el.classList.toggle('header-menu__link-active');
        };
    } else {
        for (let el of headerLinks) {
            el.classList.remove('header-menu__link-active');
        }
        for (let el of burgerSpans) {
            el.style.cssText = '';
        };
    }
});
window.addEventListener(`resize`, function (event) {
    if (window.innerWidth <= Number(968)) {
        for (let el of headerLinks) {
            el.classList.remove('header-menu__link-active');
        }
        for (let el of burgerSpans) {
            el.style.cssText = '';
        };
    }
});
