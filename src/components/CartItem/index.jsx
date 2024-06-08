import { IoIosClose } from "react-icons/io";
import { useSelector } from "react-redux";

function CartItem({ onRemoveItem }) {
  const { cartProduct } = useSelector((state) => state.cart);

  const onRemove = (product) => {
    onRemoveItem(product);
  };

  return (
    <ul className="order">
      {cartProduct.map((cartElem) => {
        return (
          <li className="order__item" key={cartElem.id}>
            <button
              onClick={() => onRemove(cartElem)}
              type="button"
              className="order__remove-btn"
            >
            <IoIosClose className="order__lock-icon" size={20} />
            </button>
            <img
              width={120}
              height={120}
              src={cartElem.image}
              alt={cartElem.title}
              title={cartElem.title}
              className="order__image"
            />
            <div className="order__details">
              <div className="order__header">
                <b className="order__title">{cartElem.title}</b>
              </div>
              <span className="order__total">{cartElem.price} руб</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export { CartItem };
