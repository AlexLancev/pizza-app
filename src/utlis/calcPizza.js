const calcSize = (e, product) => {
    const parent = e.target.closest('[data-parrent]');
    const currentInput = parent.querySelector('input[type="radio"]:checked');
    const currentInputArr = parent.querySelectorAll('input[type="radio"]');

    currentInputArr.forEach((el) => {
      if (el.checked) {
        el.classList.add('active');
      } else if(!el.checked) {
        el.classList.remove('active');
      }
    })
  
    const price = parent.querySelector('[data-price]');
    const weight = parent.querySelector('[data-weight]');
  
    price.innerText = currentInput.value * product.price;
    weight.innerText = currentInput.value * product.weight;
  }

export { calcSize };