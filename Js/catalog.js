// 1. Добавление текста 'Added', при нажатии на карточку товара на кнопку 'Add to cart'.

let btnEl = document.querySelectorAll('.cart-hover')

btnEl.forEach(function (click) {
    click.addEventListener('click', buttonClickHandler);
});

function buttonClickHandler(event) {
    let idEl = event.currentTarget.getAttribute('id');
    event.currentTarget.innerText = 'Added';
    event.currentTarget.style = 'opacity: 0.7'
    addProductIntoBasket() // Добавляем счетчик на иконке корзины (сколько раз добавили товар в корзину).
    addProductsToObjects(idEl); // Создаем объект для добавления в него id товаров (необходимо, когда добавляешь
    // товар в корзину, чтобы в корзине уже были id товаров.)
    renderProductInBasket(idEl); // Отрисовывавем нашу разметку в меню корзины.
    getTotalPrice(); // Получаем общую стоимсть всех добавленных товаров в корзине.
}

let AmountOfAddedItems = document.querySelector('.amount');

function addProductIntoBasket() {
    AmountOfAddedItems.innerText++;
}

let basket = {}; // Добавляем, в созданный обьект, 'basket' id товаров, которые будут возвращаться из функции ниже.

function addProductsToObjects(idEl) {
    if (!(idEl in basket)) {
        basket[idEl] = 1;
    } else {
        basket[idEl]++;
    }
}

function renderProductInBasket(idEl) {
    let productExist = document.querySelector(`.count[id="${idEl}"]`);

    if (productExist) {
        increaseProductCount(idEl); // Добавляем счетчик при добавлении одного и того же товара.
        recalsulateSumForProducts(idEl); // Добавляем суммирование цен с количеством добавленных товаров.
    } else {
        renderNewProductInBasket(idEl); // Делаем разметку, которая будет появляться, при добавлении товаров в корзину.
    }
}

function increaseProductCount(idEl) {
    let countEl = document.querySelector(`.count[id="${idEl}"]`);
    countEl.textContent++;
}

function recalsulateSumForProducts(idEl) {
    let productPrice = document.querySelector(`.productTotaPrice[id="${idEl}`);
    let totalProductPrice = (basket[idEl] * productsObj[idEl].price).toFixed(2);
    productPrice.innerText = totalProductPrice;
}

let cartMenu__bottomEl = document.querySelector('.cartMenu__bottom')


function renderNewProductInBasket(idEl) {
    let productRow = `
        <div class="basketRow">
            <div>${productsObj[idEl].name}</div>
            <div>
                <span class="count" id="${idEl}">1</span>&nbsp;шт.
            </div>
            <div>$${productsObj[idEl].price}</div>
            <div>
                $<span class="productTotaPrice" id="${idEl}">${productsObj[idEl].price}</span>
            </div>
        </div>
    `;

    cartMenu__bottomEl.insertAdjacentHTML("beforebegin", productRow);
}

function getTotalPrice() {
    let sumPrice = document.querySelector('.totalPrice');
    let commonPrice = 0;

    for (idEl in basket) {
        commonPrice += (basket[idEl] * productsObj[idEl].price);
        sumPrice.innerText = commonPrice.toFixed(2);
    }
}

let productsObj = []; // Извлекли данные о товарах со страницы в созданный нами объект.
let cards = document.querySelectorAll('.card');

cards.forEach(function (items) {
    let name = items.querySelector('.name__item').innerText;
    let descript = items.querySelector('.item__description').innerText;
    let price = items.querySelector('.price').innerText;

    productsObj.push({ // Добавили элементы, пройденные в цикле, в наш массив объекта.
        name,
        descript,
        price,
    });
});

// 2. Добавлено событие клика на открытие содержимого корзины.

let cartButtonEl = document.querySelector('.cartEl');
let cartMenuEl = document.querySelector('.cartMenu');

cartButtonEl.addEventListener('click', function () {
    cartMenuEl.classList.toggle('hidden')
})

// 3. Добавление анимации при наведении на обьекты 'home/ men/ new arrivals'.

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

// 4. Добавление валидации формы для ввода Email (пункт Subscribe).

let formEl = document.querySelector('.subscribe__flex');
let emailEl = document.querySelector('.email__border__left');

formEl.addEventListener('submit', function (event) {
    if (emailEl.value == '') {
        alert(`Введите Ваш email.`);
        event.preventDefault();
    }
});

// 5. Добавление анимации при клике на бургер-меню.

let menu = document.querySelector('.right_pic_burger');
let menuShow = document.querySelector('.header__nav');

menu.addEventListener('click', function () {
    menuShow.classList.add('animate__animated', 'animate__slideInRight')
})