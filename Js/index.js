// Добавление текста 'Added', при нажатии на карточку товара на кнопку 'Add to cart'.

let cartEl = document.querySelectorAll('.card-hover');

cartEl.forEach(function (click) {
    click.addEventListener('click', buttonClickHandler);
});

function buttonClickHandler(event) {
    event.target.innerText = 'Added';
    event.target.style = 'opacity: 0.7'
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

// Добавление анимации при клике на бургер-меню.

let menu = document.querySelector('.right_pic_burger');
let menuShow = document.querySelector('.header__nav');

menu.addEventListener('click', function () {
    menuShow.classList.add('animate__animated', 'animate__slideInRight')
});