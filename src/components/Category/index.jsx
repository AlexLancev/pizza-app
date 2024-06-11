import { Link } from "react-router-dom";
import "./style.scss";

const category = [
  ["Пицца", "pizza"],
  ["Комбо", "combo"],
  ["Апстеры", "upsters"],
  ["Закуски", "snacks"],
  ["Десерты", "dessert"],
  ["Напитки", "beverages"],
  ["Соусы", "sauces"],
  ["Акции", "stock"],
  ["Доставка", "delivery"],
];

function Category() {
  return (
    <ul className="category">
      {category.map((cat, index) => {
        return (
          <li className="category__item" key={index}>
            <Link
              className={index === 0 ? `category__link category__link--first` : `category__link`}
              to={`/${cat[1]}`}
            >
              {cat[0]}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export { Category, category };
