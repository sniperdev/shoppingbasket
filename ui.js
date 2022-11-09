const productItems = document.querySelectorAll("[data-name]");
const basketItems = document.querySelector(".shopping-list");
const buyButton = document.querySelector(".buyButton");
function showBasket() {
  basketItems.innerHTML = "";
  basket.products.forEach((el) => {
    const newLi = document.createElement("li");
    newLi.innerText = `${el.name} - ${el.price}`;
    basketItems.appendChild(newLi);
  });
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
