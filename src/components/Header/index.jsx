import React from "react";
import { Category } from "../Category";
import { Cart } from "../Cart";
import { bodyScroll } from "../../utlis/body-scroll";
import { Search } from "../Search";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import "./style.scss";

function Header({ onRemoveItem }) {
  const { cartProduct } = useSelector((state) => state.cart);
  const { lock } = bodyScroll;
  const elem = React.useRef(null);

  React.useEffect(() => {
    if (!elem.current) return;
  }, []);

  const bthClick = () => {
    lock();
    elem.current.classList.add("cart--active");
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <a href="/pizza" className="logo">
            <img
              width={130}
              height={100}
              src="/img/logo-full.png"
              alt="Логотип пиццерии Pizza App"
            />
          </a>
          <div className="a">
            <Search />
            <button
              type="button"
              onClick={bthClick}
              className="cart-btn"
              title="Открыть корзину товаров"
              aria-label="Открыть корзину товаров"
            >
              <IoCartOutline size={40} className="cart-btn__icon" />
              <span className="cart-btn__quantity">{cartProduct.length}</span>
            </button>
          </div>
          <Cart onRemoveItem={onRemoveItem} elem={elem} />
        </div>
        <Category />
      </div>
    </header>
  );
}

export { Header };
