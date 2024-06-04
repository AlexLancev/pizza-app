import './style.scss';

function Stock() {
  return (
    <section className="stock">
      <div className="container">
        <h2 className="stock__title">Наши акции</h2>
        <div className="stock__current">
          <h3 className="stock__heading">Дарим ТРАЙФЛ СЛИВОЧНО-СМЕТАННЫЙ</h3>
          <ul className="stock__list">
            <li className="stock__item">
              В честь вашего дня рождения при заказе от 500 рублей.
            </li>
            <li className="stock__item">
              Акция действительна за 7 дней до и после дня рождения.
            </li>
            <li className="stock__item">
              Акция не суммируется с другими спец. предложениями и акциями.
            </li>
          </ul>
        </div>
        <div className="stock__current">
          <h3 className="stock__heading">ДАРИМ СКИДКУ 10% НА САМОВЫВОЗ</h3>
          <ul className="stock__list stock__list--last">
            <li className="stock__item">
              Сделайте заказ на сайте от 1000 руб*, укажите одну из точек
              самовывоза и получите скидку 10%.
            </li>
            <li className="stock__item">
              Акция не суммируется с другими спец.предложениями и акциями.
            </li>
          </ul>
          <b className="stock__pickup-title">Самовывоз действует на адресах:</b>
          <ul className="stock__list">
            <li className="stock__item">— ул.Пушкинская, 268</li>
            <li className="stock__item">— ул.Ухтомского, 24</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export { Stock };
