import React from "react";
import { bodyScroll } from "../../utlis/body-scroll";
import { IoIosClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { Form } from "../Form";
import { CartItem } from "../CartItem";
import { submitShow } from "../../redux/onSubmit/reducer";
import { useDispatch } from "react-redux";
import "./style.scss";

function Cart({ elem, onRemoveItem }) {
  const { unLock } = bodyScroll;
  const { cartProduct, totalPrice } = useSelector((state) => state.cart);
  const { cartSubmit } = useSelector((state) => state.submit);
  const dispatch = useDispatch();

  const closeCart = () => {
    unLock();
    elem.current.classList.remove("cart--active");
  };

  // React.useEffect(() => {
  //   if (cartSubmit) {
  //     const timer = setTimeout(() => {
  //       dispatch(submitShow(false));
  //       unLock();
  //     }, 10000);

  //     return () => clearTimeout(timer);
  //   }
  // }, [cartSubmit, dispatch, unLock]);

  if (cartSubmit) {
    elem.current.classList.remove("cart--active");
  }

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
          {cartProduct.length < 1 && (
            <p className="cart__text">
              Для совершения заказа, добавьте что-нибудь в корзину
            </p>
          )}
          <CartItem onRemoveItem={onRemoveItem} />
          {cartProduct.length > 0 && (
            <div className="cart__full-price">
              <b className="cart__total">Итого:</b>
              <span className="cart__total-price">{totalPrice} руб</span>
            </div>
          )}
        </div>
        {cartProduct.length > 0 && <Form />}
      </div>
    </div>
  );
}

export { Cart };
