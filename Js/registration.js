// Добавление валидации формы для ввода Email (пункт Subscribe).

let formEl = document.querySelector('.subscribe__flex');
let emailEl = document.querySelector('.email__border__left');

formEl.addEventListener('submit', function (event) {
    if (emailEl.value == '') {
        alert(`Введите Ваш email.`);
        event.preventDefault();
    }
});

// Добавление валидации для формы регистрации.

let formRegistration = document.querySelector('.registration__flex__form');
let inputEl = document.querySelector('#input-1');
let inputE2 = document.querySelector('#input-2');
let inputE3 = document.querySelector('#input-3');
let inputE4 = document.querySelector('#input-4');


formRegistration.addEventListener('submit', function (event) {
    if (inputEl.value == '') {
        inputEl.classList.add('animate__animated', 'animate__flash');
        event.preventDefault();

    } else if (inputE2.value == '') {
        inputE2.classList.add('animate__animated', 'animate__flash');
        event.preventDefault();

    } else if (inputE3.value == '') {
        inputE3.classList.add('animate__animated', 'animate__flash');
        event.preventDefault();

    } else if (inputE4.value == '') {
        inputE4.classList.add('animate__animated', 'animate__flash');
        event.preventDefault();
    }
});

// Добавление анимации при клике на кнопку 'Join now'.

let btnJoin = document.querySelector('button');

btnJoin.addEventListener('click', btnJoinClickHandler)

function btnJoinClickHandler(event) {
    event.target.classList.add('animate__animated', 'animate__jello');
}

// Добавление анимации при клике на бургер-меню.

let menu = document.querySelector('.right_pic_burger');
let menuShow = document.querySelector('.header__nav');

menu.addEventListener('click', function () {
    menuShow.classList.add('animate__animated', 'animate__slideInRight')
})