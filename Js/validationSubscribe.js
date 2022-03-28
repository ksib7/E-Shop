// 1. Добавление валидации формы для ввода Email (пункт Subscribe).

let formEl = document.querySelector(".subscribe__flex");
let emailEl = document.querySelector(".email__border__left");

formEl.addEventListener("submit", function (event) {
  if (emailEl.value == "") {
    alert(`Введите Ваш email.`);
    event.preventDefault();
  }
});
