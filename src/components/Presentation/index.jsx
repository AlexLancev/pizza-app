import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";
import { arrSize } from "../Product";
import { calcSize } from "../../utlis/calcPizza";
import { add } from "../../utlis/addProduct";

import "./style.scss";

function Presentation({ onAddToCart, cart }) {
  const presentation = useSelector(
    (state) => state.presentation.presentationProduct
  );

  const { title, image, description, price, weight, name, id, category, sizeCurrent } =
  presentation;

  return (
    <section className="presentation">
      <div className="container">
        <div className="presentation__inner">
          <img
            width={400}
            height={400}
            src={image}
            alt={title}
            title={title}
            className="presentation__image"
          />
          <div className="presentation__info" data-parrent>
            <div className="presentation__home">
              <Link
                to={`/${category}`}
                className="presentation__link-home"
                title="Вернутся на главную страницу"
              >
                <IoIosArrowBack
                  className="presentation__link-arrow"
                  size={20}
                  color="#4dcc60"
                />
              </Link>
              <b className="presentation__category">{name}</b>
            </div>
            <h2 className="presentation__title">{title}</h2>
            <p className="presentation__description">{description}</p>
            <div className="presentation__quantity">
              <b className="presentation__price">
                <i className="presentation__price-num" data-price>
                  {price * sizeCurrent}
                </i>
                &#8381;
              </b>
              {weight && (
                <span className="presentation__weight">
                  <i className="product__weight-num" data-weight>
                    {weight * sizeCurrent}
                  </i>
                  г
                </span>
              )}
            </div>
            <ul className="product__all-size">
              {presentation.size &&
                presentation.size.map((size, index) => (
                  <li className="product__size-item" key={index}>
                    <label className="product__label">
                      <input
                        onClick={(e) => calcSize(e, presentation)}
                        className={`visually-hidde product__size-input ${index === 0 && `active`}`}
                        type="radio"
                        name={`${presentation.title} size`}
                        value={size}
                        defaultChecked={index === 0 ||
                          (presentation.id === id && size === sizeCurrent)
                        }
                      />
                      <span className="product__size">{arrSize[index]}</span>
                    </label>
                  </li>
                ))}
            </ul>
            <button
              className={
                cart.find((el) => el.cartId === presentation.id)
                  ? "presentation__remove"
                  : "presentation__add"
              }
              type="button"
              onClick={(e) => add(e, presentation, onAddToCart)}
            >
              {cart.find((el) => el.cartId === presentation.id) ? (
                <IoMdCheckmark />
              ) : (
                <FaPlus />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Presentation };
