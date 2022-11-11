const productItems = document.querySelectorAll("[data-name]");
const basketItems = document.querySelector(".shopping-list");
const buyButton = document.querySelector(".buyButton");

const removeProduct = (ev) => {
  basket.rem(ev.target.dataset.id);
  showBasket();
};

function showBasket() {
  basketItems.innerHTML = "";

  for (const { id, text } of basket.getBasketSummary()) {
    const li = document.createElement("li");
    li.innerText = text;
    li.dataset.id = id;
    li.addEventListener("click", removeProduct);
    basketItems.appendChild(li);
  }
  buyButton.innerHTML = `Kup teraz - ${basket.showBasketTotalValue()} zł`;
}

const addToBasket = (el) => {
  const newProduct = new Product(
    el.target.dataset.name,
    Number(el.target.dataset.price)
  );
  basket.add(newProduct);
  showBasket();
};

productItems.forEach((el) => {
  el.addEventListener("click", addToBasket);
});

function clearBasket() {
  alert(
    `Gratuluje zrobiłeś zakupy na naszej stronie, masz do zapłacenia ${basket.showBasketTotalValue()}`
  );
  basket.products = [];
  showBasket();
  buyButton.innerHTML = "Dodaj najpierw produkty do listy";
}

buyButton.addEventListener("click", clearBasket);
