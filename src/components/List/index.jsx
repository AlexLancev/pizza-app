import React from "react";
import { Product } from "../Product";
import { Sort } from "../Sort";
import { useSelector } from "react-redux";

import "./style.scss";

function List({ productData, isLoad, value, onChangeSort, onAddToCart, cart }) {
  const currentProductList = useSelector(
    (state) => state.currentProduct.currentProductList
  );
  
  return (
    <section className="product">
      <div className="product__header">
        <h2 className="product__title">
          {currentProductList.length ? currentProductList[0].name : null}
        </h2>
        <Sort value={value} onChangeSort={(i) => onChangeSort(i)} />
      </div>
      <ul className="product__list">
        <Product cart={cart} onAddToCart={onAddToCart} productData={productData} isLoad={isLoad} />
      </ul>
    </section>
  );
}

export { List };


















































// import React from "react";
// import { Product } from "../Product";
// import { Sort } from "../Sort";

// import "./style.scss";

// function List({ productData, isLoad, value, onChangeSort, onAddToCart, cart }) {
  
//   return (
//     <section className="product">
//       <div className="product__header">
//         <h2 className="product__title">
//           {productData.length ? productData[0].name : null}
//         </h2>
//         <Sort value={value} onChangeSort={(i) => onChangeSort(i)} />
//       </div>
//       <ul className="product__list">
//         <Product cart={cart} onAddToCart={onAddToCart} productData={productData} isLoad={isLoad} />
//       </ul>
//     </section>
//   );
// }

// export { List };
