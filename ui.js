const productItems = document.querySelectorAll("[data-name]");
const basketItems = document.querySelector(".shopping-list");

function showBasket() {
  basketItems.innerHTML = "";
  basket.products.forEach((el) => {
    const newLi = document.createElement("li");
    newLi.innerText = `${el.name} - ${el.price}`;
    basketItems.appendChild(newLi);
  });
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
