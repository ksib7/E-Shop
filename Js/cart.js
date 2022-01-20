// 1. Добавление валидации формы с кнопкой 'get a quote'.

let formQuoteEl = document.querySelector('.cart__right__up');
let inputEl = document.querySelector('#input-1');
let inputE2 = document.querySelector('#input-2');
let inputE3 = document.querySelector('#input-3');
let btnQuote = document.querySelector('.cart__right__up__btn');
let btnProceed = document.querySelector('.cart__right__down__btn');
let btnCart = document.querySelectorAll('.cart__left__text__btn');


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

// 2. Добавление анимации на кнопку 'get a quote'.

btnQuote.addEventListener('click', function (event) {
    event.target.classList.add('animate__animated', 'animate__heartBeat');
});

// 3. Добавление анимации на кнопку 'proceed to checkout'.

btnProceed.addEventListener('click', function (event) {
    event.target.classList.add('animate__animated', 'animate__shakeY');
});

// 4. Добавление анимации на кнопку 'Clear shopping cart' и 'Continue shopping'.

btnCart.forEach(function (button) {
    button.addEventListener('click', cartClickHandler);
});

function cartClickHandler(event) {
    event.target.classList.add('animate__animated', 'animate__backInDown');
}