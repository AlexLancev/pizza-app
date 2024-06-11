import React from "react";
import { Product } from "../Product";
import { Sort } from "../Sort";
import { useSelector } from "react-redux";

import "./style.scss";

function List({ isLoad, isError, value, onChangeSort, onAddToCart }) {
  const { currentProductList } = useSelector((state) => state.currentProduct);

  return (
    <section className="product">
      <div className="product__header">
        <h2 className="product__title">
          {currentProductList.length ? currentProductList[0].name : null}
        </h2>
        <Sort value={value} onChangeSort={(i) => onChangeSort(i)} />
      </div>
      <Product onAddToCart={onAddToCart} isLoad={isLoad} isError={isError} />
    </section>
  );
}

export { List };
