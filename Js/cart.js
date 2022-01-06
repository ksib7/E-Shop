// При нажатии на крестик, закрываются окна на стр. Cart.

let closeEl = document.querySelectorAll('.cart__left__description__btn');

closeEl.forEach(function (close) {
    close.addEventListener('click', closeclickHandler);
});

function closeclickHandler(event) {
    event.currentTarget.parentNode.classList.add('animate__animated', 'animate__lightSpeedOutLeft')
}

// Добавление валидации формы для ввода Email (пункт Subscribe).

let formEl = document.querySelector('.subscribe__flex');
let emailEl = document.querySelector('.email__border__left');

formEl.addEventListener('submit', function (event) {
    if (emailEl.value == '') {
        alert(`Введите Ваш email.`);
        event.preventDefault();
    }
});

// Добавление валидации формы с кнопкой 'get a quote'.

let formQuoteEl = document.querySelector('.cart__right__up');
let inputEl = document.querySelector('#input-1');
let inputE2 = document.querySelector('#input-2');
let inputE3 = document.querySelector('#input-3');


formQuoteEl.addEventListener('submit', function (event) {
    if (inputEl.value == '') {
        inputEl.classList.add('animate__animated', 'animate__flash');
        event.preventDefault();

    } else if (inputE2.value == '') {
        inputE2.classList.add('animate__animated', 'animate__flash');
        event.preventDefault();

    } else if (inputE3.value == '') {
        inputE3.classList.add('animate__animated', 'animate__flash');
        event.preventDefault();
    }
});

// Добавление анимации на кнопку 'get a quote'.

let btnQuote = document.querySelector('.cart__right__up__btn');

btnQuote.addEventListener('click', function (event) {
    event.target.classList.add('animate__animated', 'animate__heartBeat');
});

// Добавление анимации на кнопку 'proceed to checkout'.

let btnProceed = document.querySelector('.cart__right__down__btn');

btnProceed.addEventListener('click', function (event) {
    event.target.classList.add('animate__animated', 'animate__shakeY');
});

// Добавление анимации на кнопку 'proceed to checkout'.

let btnCart = document.querySelectorAll('.cart__left__text__btn');

btnCart.forEach(function (button) {
    button.addEventListener('click', cartClickHandler);
});


function cartClickHandler(event) {
    event.target.classList.add('animate__animated', 'animate__backInDown');
}

// Добавление анимации при клике на бургер-меню.

let menu = document.querySelector('.right_pic_burger');
let menuShow = document.querySelector('.header__nav');

menu.addEventListener('click', function () {
    menuShow.classList.add('animate__animated', 'animate__slideInRight')
})

/* Не получается сделать, чтобы при нажатии на кнопку 'clear chopping cart', карточки сверху пропадали.
Решить вопрос.

let clearBtn = document.querySelector('.cart__left__text__btn');
let upEl = document.querySelector('.cart__left__up');
let downEl = document.querySelector('.cart__left__down');

clearBtn.addEventListener('click', function () {
    upEl.target.classList.add('animate__animated', 'animate__fadeOutUp');
    downEl.target.classList.add('animate__animated', 'animate__fadeOutUp');
});

*/