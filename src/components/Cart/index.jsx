import React from "react";
import { bodyScroll } from "../../utlis/body-scroll";
import { IoIosClose } from "react-icons/io";
import { useSelector } from "react-redux";
import "./style.scss";

function Cart({ elem, cart = [], onRemoveItem }) {
  const { unLock } = bodyScroll;

  const closeCart = () => {
    unLock();
    elem.current.classList.remove("cart--active");
  };

  const cartProduct = useSelector(
    (state) => state.cart.cartProduct
  );

  return (
    <div className="cart" ref={elem}>
      <button
        className="cart__lock"
        onClick={closeCart}
        title="Закрыть корзину товаров"
        aria-label="Закрыть корзину"
      >
        <IoIosClose className="cart__lock-icon" size={40} />
      </button>
      <div className="cart__inner">
        <div className="cart__order">
          <b className="cart__title">Состав заказа</b>
          <p className="cart__text visually-hidden">
            Для совершения заказа, добавьте что-нибудь в корзину
          </p>
          <ul className="order">
            {cartProduct.map((product) => {
              return (
                <li className="order__item" key={product.id}>
                  <button
                    onClick={() => onRemoveItem(product)}
                    type="button"
                    className="order__remove-btn"
                  >
                    <IoIosClose className="order__lock-icon" size={20} />
                  </button>
                  <img
                    width={120}
                    height={120}
                    src={product.image}
                    alt={product.title}
                    title={product.title}
                    className="order__image"
                  />
                  <div className="order__details">
                    <div className="order__header">
                      <b className="order__title">{product.title}</b>
                      <div className="order__quantity-inner">
                        <button
                          className="order__btn order__btn--plus"
                          type="button"
                        >
                          -
                        </button>
                        <span className="order__btn order__quantity">x1</span>
                        <button
                          className="order__btn order__btn--minus"
                          type="button"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <span className="order__total">{product.price} руб</span>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="cart__full-price">
            <b className="cart__total">Итого:</b>
            <span className="cart__total-price">499 руб</span>
          </div>
        </div>
        <div className="cart__contacts"></div>
      </div>
    </div>
  );
}

export { Cart };