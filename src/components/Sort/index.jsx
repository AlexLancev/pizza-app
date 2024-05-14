import { IoIosArrowDown } from "react-icons/io";
import React from "react";

import "./style.scss";

function Sort({ value, onChangeSort }) {
  const [popupOpen, setPopupOpen] = React.useState(false);
  const listCategory = [
    { name: "цене ( DESС )", sortProperty: "price" },
    { name: "цене ( ASС )", sortProperty: "-price" },
    { name: "алфавиту ( DESС )", sortProperty: "title" },
    { name: "алфавиту ( ASС )", sortProperty: "-title" },
  ];

  const onClickListItem = (i) => {
    onChangeSort(i);
    setPopupOpen(false);
  };

  return (
    <div className="sort">
      <button type="button" className="sort__btn">
        <IoIosArrowDown className="sort__icon" />
      </button>
      <b className="sort__category-type">Сортировать по</b>
      <button
        onClick={() => setPopupOpen(!popupOpen)}
        type="button"
        className="sort__type"
      >
        {value.name}
      </button>
      {popupOpen && (
        <ul className="sort__popup">
          {listCategory.map((obj, index) => {
            return (
              <li className="sort__type" key={index}>
                <button
                  onClick={() => onClickListItem(obj)}
                  type="button"
                  className="sort__type-btn"
                >
                  {obj.name}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export { Sort };
