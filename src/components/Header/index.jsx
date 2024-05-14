import React from "react";
import { Category } from "../Category";
import { Cart } from "../Cart";
import { bodyScroll } from "../../utlis/body-scroll";
import { Search } from "../Search";
import "./style.scss";

function Header() {
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
          <a href="/" className="logo">
            <img
              width={130}
              height={100}
              src="/img/logo-full.png"
              alt="Логотип пиццерии Pizza App"
            />
          </a>
          <div className="a">
            <Search />
            <button type="button" onClick={bthClick} className="cart-btn">
              <span className="cart-btn__text">Корзина</span>
              <span className="cart-btn__quantity">0</span>
            </button>
          </div>
          <Cart elem={elem} />
        </div>
        <Category />
      </div>
    </header>
  );
}

export { Header };
