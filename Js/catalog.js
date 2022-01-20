// 1. Добавление анимации при наведении на обьекты 'home/ men/ new arrivals'.

let mouseoverEl = document.querySelectorAll('.header__catalog__text');

mouseoverEl.forEach(function (hover) {
    hover.addEventListener('mouseover', btnClickHandler);
});

function btnClickHandler(event) {
    event.target.classList.add('animate__animated', 'animate__fadeIn');
}

mouseoverEl.forEach(function (hover) {
    hover.addEventListener('mouseout', hoverRemove);
});

function hoverRemove(event) {
    event.target.classList.remove('animate__animated', 'animate__fadeIn');
}