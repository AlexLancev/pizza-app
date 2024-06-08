const add = (e, product, onAddToCart) => {
  const parent = e.target.closest("[data-parrent]");
  if (!parent) {
    console.error("Parent element with [data-parrent] not found");
    return;
  }

  const priceElement = parent.querySelector("[data-price]");
  if (!priceElement) {
    console.error("Price element not found");
    return;
  }

  const price = priceElement.innerText;

  const currentInput = parent.querySelector('input[type="radio"]:checked');
  const size = currentInput ? Number(currentInput.value) : 0;

  const weightElement = parent.querySelector("[data-weight]");
  const weight = weightElement ? weightElement.innerText : null;

  onAddToCart({
    title: product.title,
    image: product.image,
    price: price,
    name: product.name,
    cartId: product.id,
    size: product.size,
    sizes: size,
    weight: weight,
  });
};

export { add };
