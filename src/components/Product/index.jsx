import React from "react";
import { MyLoader } from "../Loader";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";
import { calcSize } from "../../utlis/calcPizza";
import { add } from "../../utlis/addProduct";
import { useSelector } from "react-redux";
import { NotFoundPage } from "../../pages/NotFoundPage";
import "./style.scss";

const arrSize = ["xl", "xxl", "xxxl"];

function Product({ isLoad, isError, onAddToCart }) {
  const [activeSizes, setActiveSizes] = React.useState({});
  const { currentProductList } = useSelector((state) => state.currentProduct);
  const { cartProduct } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleClick = (e, product) => {
    const productObj = {
      product: product,
      current: activeSizes[product.id] || 0,
    };
    localStorage.setItem("product", JSON.stringify(productObj));
    navigate(`/${product.title}`);
    window.scrollTo(0, 0);
  };

  const sizeChange = (e, productId) => {
    setActiveSizes((prevSizes) => ({
      ...prevSizes,
      [productId]: Number(e.target.value),
    }));
  };

  if (isError) {
    return <NotFoundPage />;
  }

  return isLoad ? (
    [...new Array(9)].map((_, index) => <MyLoader key={index} />)
  ) : (
    <>
      {currentProductList.map((product) => {
        const activeSize = activeSizes[product.id] || 0;
        const inCart = cartProduct.find(
          (cart) => cart.name === product.name && cart.cartId === product.id
        );

        return (
          <li
            className="product__item"
            data-parrent
            key={product.id}
            id={product.id}
          >
            <div className="product__box">
              <button
                type="button"
                onClick={(e) => handleClick(e, product)}
                className="product__link"
              >
                <img
                  className="product__image"
                  src={product.image}
                  width={290}
                  height={290}
                  alt={product.title}
                  title={product.title}
                  loading="lazy"
                />
                <h3 className="product__heading">{product.title}</h3>
                <p className="product__description">{product.description}</p>
              </button>
              <ul className="product__all-size">
                {product.size &&
                  product.size.map((size, index) => (
                    <li className="product__size-item" key={index}>
                      <label className="product__label">
                        <input
                          onChange={(e) => sizeChange(e, product.id)}
                          checked={
                            inCart
                              ? index === inCart.sizes
                              : index === activeSize
                          }
                          className={`visually-hidden product__size-input ${
                            (inCart && index === inCart.sizes) ||
                            index === activeSize
                              ? "active"
                              : ""
                          }`}
                          type="radio"
                          name={product.title}
                          value={index}
                        />
                        <span className="product__size">{arrSize[index]}</span>
                      </label>
                    </li>
                  ))}
              </ul>
              <div className="product__info">
                <div className="product__quantity">
                  <b className="product__price">
                    <i className="product__price-num" data-price>
                      {inCart ? inCart.price : product.price * (activeSize + 1)}
                    </i>
                    &#8381;
                  </b>
                  {product.weight && (
                    <span className="product__weight">
                      <i data-weight className="product__weight-num">
                        {inCart
                          ? inCart.weight
                          : product.weight * (activeSize + 1)}
                      </i>
                      г
                    </span>
                  )}
                </div>
                <button
                  data-btn
                  onClick={(e) => add(e, product, onAddToCart)}
                  className={inCart ? "product__remove" : "product__add"}
                  type="button"
                >
                  {inCart ? <IoMdCheckmark /> : <FaPlus />}
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
}

export { Product, arrSize, calcSize };
