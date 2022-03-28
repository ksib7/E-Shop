// 1. Добавление валидации для формы регистрации.

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

// 2. Добавление анимации при клике на кнопку 'Join now'.

let btnJoin = document.querySelector('button');

btnJoin.addEventListener('click', btnJoinClickHandler)

function btnJoinClickHandler(event) {
    event.target.classList.add('animate__animated', 'animate__jello');
}