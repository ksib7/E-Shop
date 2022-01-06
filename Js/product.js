// Добавление текста 'Added', при нажатии на карточку товара на кнопку 'Add to cart'.

let cartEl = document.querySelectorAll('.card-hover');

cartEl.forEach(function (click) {
    click.addEventListener('click', buttonClickHandler);
});

function buttonClickHandler(event) {
    event.target.innerText = 'Added';
    event.target.style = 'opacity: 0.7'
}

// Добавление анимации при наведении на обьекты 'home/ men/ new arrivals'.

let mouseoverEl1 = document.querySelectorAll('.header__product__text');

mouseoverEl1.forEach(function (hover) {
    hover.addEventListener('mouseover', btnClickHandler);
});

function btnClickHandler(event) {
    event.target.classList.add('animate__animated', 'animate__fadeIn');
}

mouseoverEl1.forEach(function (hover) {
    hover.addEventListener('mouseout', hoverRemove);
});

function hoverRemove(event) {
    event.target.classList.remove('animate__animated', 'animate__fadeIn');
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

// Добавление текста 'Added', при нажатии на кнопку 'Add to cart' + добавление анимаций при клике.

let cartBtn = document.querySelector('.cart__btn');

cartBtn.addEventListener('click', function (event) {
    event.target.innerText = 'Added';
    event.target.classList.add('animate__animated', 'animate__flipInX');
});

// Добавление анимации при клике на бургер-меню.

let menu = document.querySelector('.right_pic_burger');
let menuShow = document.querySelector('.header__nav');

menu.addEventListener('click', function () {
    menuShow.classList.add('animate__animated', 'animate__slideInRight')
})