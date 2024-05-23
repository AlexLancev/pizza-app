const add = (e, product, onAddToCart) => {
  const parent = e.target.closest("[data-parrent]");
  const currentInput = parent.querySelector('input[type="radio"]:checked');
  const price = parent.querySelector("[data-price]");
  const weight = parent.querySelector("[data-weight]");
  
  onAddToCart({
    title: product.title,
    image: product.image,
    price: price.innerText,
    weight: weight.innerText,
    name: product.name,
    cartId: product.id,
    size: Number(currentInput.value),
  });
};

export { add };
