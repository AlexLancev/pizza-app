import React from "react";
import { MyLoader } from "../Loader";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { presentationShow } from "../../redux/product/reducer";
import { sizeView } from "../../redux/size/reducer";
import { sizeId } from "../../redux/size/reducer";
import { useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";

import "./style.scss";

function Product({ productData, isLoad, onAddToCart, cart }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (e, product, id) => {
    const input = e.target
      .closest(".product__item")
      .querySelector('input[type="radio"]:checked');
    if (input) {
      dispatch(sizeView(input.value));
      dispatch(sizeId(id));
    }
    dispatch(presentationShow(product));
    navigate(`/${product.title}`);
    window.scrollTo(0, 0);
  };

  const sizeViews = useSelector((state) => state.size.sizeCurrent);

  const sizeIds = useSelector((state) => state.size.sizeId);

  const add = (product) => {
    onAddToCart({
      title: product.title,
      image: product.image,
      price: product.price,
      weight: product.weight,
      name: product.name,
      cartId: product.id,
    });
  };

  return isLoad ? (
    [...new Array(9)].map((_, index) => <MyLoader key={index} />)
  ) : (
    <>
      {productData.map((product) => (
        <li className="product__item" key={product.id}>
          <div className="product__box">
            <button
              type="button"
              onClick={(e) => handleClick(e, product, product.id)}
              className="product__link"
            >
              <img
                className="product__image"
                src={product.image}
                width={290}
                height={290}
                alt={product.title}
                title={product.title}
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
                        className="visually-hidden product__size-input"
                        type="radio"
                        name={product.title}
                        value={size}
                        defaultChecked={
                          index === 0 ||
                          (product.id === sizeIds && size === sizeViews)
                        }
                      />
                      <span className="product__size">{size}</span>
                    </label>
                  </li>
                ))}
            </ul>
            <div className="product__info">
              <div className="product__quantity">
                <b className="product__price">{product.price} &#8381;</b>
                {product.weight && (
                  <span className="product__weight">
                    <i className="product__weight-num">{product.weight}</i> г
                  </span>
                )}
              </div>
              <button
                onClick={() => add(product)}
                className={
                  cart.find((el) => el.cartId === product.id)
                    ? "product__remove"
                    : "product__add"
                }
                type="button"
              >
                {
                  cart.find((el) => el.cartId === product.id)
                    ? <IoMdCheckmark />
                    : <FaPlus />
                }
               
              </button>
            </div>
          </div>
        </li>
      ))}
    </>
  );
}

export { Product };
