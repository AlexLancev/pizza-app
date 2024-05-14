import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { sizeView } from "../../redux/size/reducer";
import { sizeId } from "../../redux/size/reducer";
import { useDispatch } from "react-redux";

import "./style.scss";

function Presentation() {
  const presentation = useSelector(
    (state) => state.presentation.presentationProduct
  );

  const sizeViews = useSelector((state) => state.size.sizeCurrent);

  const dispatch = useDispatch();

  const sizeClick = (e, id) => {
    if (e.target.checked) {
      dispatch(sizeView(e.target.value));
      dispatch(sizeId(id));
    }
  };

  const sizeIds = useSelector((state) => state.size.sizeId);

  const { title, image, description, price, weight, name, id, category } = presentation;

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
          <div className="presentation__info">
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
              <b className="presentation__price">{price} &#8381;</b>
              {weight && (
                <span className="presentation__weight">
                  <i className="product__weight-num">{weight}</i> г
                </span>
              )}
            </div>
            <ul className="product__all-size">
              {presentation.size &&
                presentation.size.map((size, index) => (
                  <li className="product__size-item" key={index}>
                    <label className="product__label">
                      <input
                        onClick={(e) => sizeClick(e, id)}
                        className="visually-hidden product__size-input"
                        type="radio"
                        name={`${presentation.title} size`}
                        value={size}
                        defaultChecked={id === sizeIds && size === sizeViews}
                      />
                      <span className="product__size">{size}</span>
                    </label>
                  </li>
                ))}
            </ul>
            <button className="presentation__add" type="button">
              Добавить
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Presentation };
