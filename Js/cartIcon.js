// 1. Добавление текста 'Added', при нажатии на карточку товара на кнопку 'Add to cart'.

let btnEl = document.querySelectorAll('.cart-hover')
let AmountOfAddedItems = document.querySelector('.amount');
let cartMenu__bottomEl = document.querySelector('.cartMenu__bottom');
let cards = document.querySelectorAll('.card');
let cartButtonEl = document.querySelector('.cartEl');
let cartMenuEl = document.querySelector('.cartMenu');

btnEl.forEach(function (click) {
    click.addEventListener('click', buttonClickHandler);
});

function buttonClickHandler(event) {
    let idEl = event.currentTarget.getAttribute('id');
    event.currentTarget.innerText = 'Added';
    event.currentTarget.style = 'opacity: 0.7'
    increaseCountOnTheCartIcon() // Добавляем счетчик на иконке корзины (сколько раз добавили товар в корзину).
    addProductsToObjects(idEl); // Создаем объект для добавления в него id товаров (необходимо, когда добавляешь
    // товар в корзину, чтобы в корзине уже были id товаров.)
    renderProductInBasket(idEl); // Отрисовывавем нашу разметку в меню корзины.
    getTotalPrice(); // Получаем общую стоимсть всех добавленных товаров в корзине.
}

function increaseCountOnTheCartIcon() {
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

cartButtonEl.addEventListener('click', function () {
    cartMenuEl.classList.toggle('hidden');
});