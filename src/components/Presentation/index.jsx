import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";
import { arrSize } from "../Product";
import { calcSize } from "../../utlis/calcPizza";
import { add } from "../../utlis/addProduct";
import { useSelector } from "react-redux";

import "./style.scss";

function Presentation({ onAddToCart }) {
  const cartProduct = useSelector((state) => state.cart.cartProduct);
  const currentProduct = JSON.parse(localStorage.getItem("product"));
  const { id, image, title, category, name, weight, price, size, description } =
    currentProduct.product;

  const inCart = cartProduct.find((el) => el.cartId === id);
  const [activeSize, setActiveSize] = useState(
    inCart ? inCart.sizes : currentProduct.current || 0
  );

  const handleSizeChange = (e) => {
    setActiveSize(Number(e.target.value));
  };

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
                  {String(inCart ? inCart.price : price * (activeSize + 1))}
                </i>
                &#8381;
              </b>
              {weight && (
                <span className="presentation__weight">
                  <i className="product__weight-num" data-weight>
                    {String(inCart ? inCart.weight : weight * (activeSize + 1))}
                  </i>
                  г
                </span>
              )}
            </div>
            <ul className="product__all-size">
              {size &&
                size.map((siz, index) => (
                  <li className="product__size-item" key={index}>
                    <label className="product__label">
                      <input
                        onChange={handleSizeChange}
                        className={`visually-hidde product__size-input ${
                          (inCart && index === inCart.sizes) || index === activeSize ? "active" : ""
                        }`}
                        type="radio"
                        name={`${title} size`}
                        value={index}
                        checked={inCart ? index === inCart.sizes : index === activeSize}
                      />
                      <span className="product__size">{arrSize[index]}</span>
                    </label>
                  </li>
                ))}
            </ul>
            <button
              className={
                inCart ? "presentation__remove" : "presentation__add"
              }
              type="button"
              onClick={(e) => add(e, { ...currentProduct.product, size: activeSize }, onAddToCart)}
            >
              {inCart ? (
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






































































// import React from "react";
// import { Link } from "react-router-dom";
// import { IoIosArrowBack } from "react-icons/io";
// import { FaPlus } from "react-icons/fa6";
// import { IoMdCheckmark } from "react-icons/io";
// import { arrSize } from "../Product";
// import { calcSize } from "../../utlis/calcPizza";
// import { add } from "../../utlis/addProduct";
// import { useSelector } from "react-redux";

// import "./style.scss";

// function Presentation({ onAddToCart }) {
//   const cartProduct = useSelector((state) => state.cart.cartProduct);
//   const currentProduct = JSON.parse(localStorage.getItem("product"));

//   const { id, image, title, category, name, weight, price, size, description } =
//     currentProduct.product;

//   return (
//     <section className="presentation">
//       <div className="container">
//         <div className="presentation__inner">
//           <img
//             width={400}
//             height={400}
//             src={image}
//             alt={title}
//             title={title}
//             className="presentation__image"
//           />
//           <div className="presentation__info" data-parrent>
//             <div className="presentation__home">
//               <Link
//                 to={`/${category}`}
//                 className="presentation__link-home"
//                 title="Вернутся на главную страницу"
//               >
//                 <IoIosArrowBack
//                   className="presentation__link-arrow"
//                   size={20}
//                   color="#4dcc60"
//                 />
//               </Link>
//               <b className="presentation__category">{name}</b>
//             </div>
//             <h2 className="presentation__title">{title}</h2>
//             <p className="presentation__description">{description}</p>
//             <div className="presentation__quantity">
//               <b className="presentation__price">
//                 <i className="presentation__price-num" data-price>
//                   {parseFloat(price) * parseFloat(currentProduct.current)}
//                 </i>
//                 &#8381;
//               </b>
//               {weight && (
//                 <span className="presentation__weight">
//                   <i className="product__weight-num" data-weight>
//                     {parseFloat(weight) * parseFloat(currentProduct.current)}
//                   </i>
//                   г
//                 </span>
//               )}
//             </div>
//             <ul className="product__all-size">
//               {size &&
//                 size.map((siz, index) => (
//                   <li className="product__size-item" key={index}>
//                     <label className="product__label">
//                       <input
//                         onClick={(e) => calcSize(e, currentProduct.product)}
//                         className={`visually-hidde product__size-input ${
//                           currentProduct.product.id === id &&
//                           siz === currentProduct.current
//                             ? `active`
//                             : ""
//                         }`}
//                         type="radio"
//                         name={`${title} size`}
//                         value={siz}
//                         defaultChecked={
//                           index === 0 ||
//                           (currentProduct.product.id === id &&
//                             siz === currentProduct.current)
//                         }
//                       />
//                       <span className="product__size">{arrSize[index]}</span>
//                     </label>
//                   </li>
//                 ))}
//             </ul>
//             <button
//               className={
//                 cartProduct.find(
//                   (elem) => elem.name === name && elem.cartId === id
//                 )
//                   ? "presentation__remove"
//                   : "presentation__add"
//               }
//               type="button"
//               onClick={(e) => add(e, currentProduct.product, onAddToCart)}
//             >
//               {cartProduct.find(
//                 (elem) => elem.name === name && elem.cartId === id
//               ) ? (
//                 <IoMdCheckmark />
//               ) : (
//                 <FaPlus />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export { Presentation };
