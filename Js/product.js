// 1. Добавление анимации при наведении на обьекты 'home/ men/ new arrivals'.

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

// 2. Добавление текста 'Added', при нажатии на кнопку 'Add to cart' + добавление анимаций при клике.

let cartBtn = document.querySelector('.cart__btn');

cartBtn.addEventListener('click', function (event) {
    event.target.innerText = 'Added';
    event.target.classList.add('animate__animated', 'animate__flipInX');
});