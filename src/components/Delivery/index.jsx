import { DeliveryMap } from "../DeliveryMap";

import "./style.scss";

function Delivery() {
  return (
    <section className="delivery">
      <div className="container">
        <b className="delivery__head">Условия доставки:</b>
        <ul className="delivery__list">
          <li className="delivery__item">Стоимость доставки 200 руб.</li>
          <li className="delivery__item">
            Доставка осуществляется бесплатно при заказе от 500 руб
          </li>
        </ul>
        <div className="delivery__box-time">
          <b className="delivery__head">Время приёма заказов:</b>
          <span className="delivery__time">ВС — ЧТ с 10:00 до 23:45</span>
          <span className="delivery__time">ВС — ЧТ с 10:00 до 23:45</span>
        </div>
      </div>
      <DeliveryMap />
    </section>
  );
}

export { Delivery };
