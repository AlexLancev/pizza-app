import { bodyScroll } from "../../utlis/body-scroll";
import "./style.scss";
import React from "react";

function Cart({ elem }) {
  const { unLock } = bodyScroll;

  const closeCart = () => {
    unLock();
    elem.current.classList.remove("cart--active");
  };

  return (
    <div className={"cart"} ref={elem}>
      <button className="cart__lock" onClick={closeCart}>
        X
      </button>
      <div className="cart__inner">
        <div className="cart__order">
          <b className="cart__title">Состав заказа</b>
          <p className="cart__text visually-hidden">
            Для совершения заказа, добавьте что-нибудь в корзину
          </p>
          <ul className="order">
            <li className="order__item">
              <img src="" alt="" className="order__image" />
              <div className="order__details">
                <div className="order__header">
                  <b className="order__title">Курица с ананасами</b>
                  <div className="order__quantity-inner">
                    <button
                      className="order__btn order__btn--plus"
                      type="button"
                    >
                      +
                    </button>
                    <span className="order__quantity">x1</span>
                    <button
                      className="order__btn order__btn--minus"
                      type="button"
                    >
                      -
                    </button>
                  </div>
                </div>
                <span className="order__total">499 руб</span>
              </div>
            </li>
          </ul>
          <div className="cart__full-price">
            <span className="cart__total">Итого:</span>
            <span className="cart__total-price">1999 руб</span>
          </div>
        </div>
        <div className="cart__contacts"></div>
      </div>
    </div>
  );
}

export { Cart };
