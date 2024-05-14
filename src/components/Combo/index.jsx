import React, { useEffect, useState } from "react";
import axios from "axios";
import { List } from "../List";

function Combo() {
  const [productData, setProductData] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  const [sortType, setSortType] = useState({
    name: "Цене ( DESC )",
    sortProperty: "price",
  });

  const sortBy = sortType.sortProperty.replace("-", "");
  const order = sortType.sortProperty.includes("-") ? "asc" : "desc";

  useEffect(() => {
    setIsLoad(true);
    axios
      .get(
        `https://661fb10916358961cd952913.mockapi.io/combo?&sortBy=${sortBy}&order=${order}`
      )
      .then((response) => {
        setProductData(response.data);
        setIsLoad(false);
      })
      .catch((error) => {
        console.error("Ошибка получения данных: ", error);
      });
    window.scrollTo(0, 0);
  }, [sortBy, order]);

  return (
    <div className="container">
      <List
        value={sortType}
        onChangeSort={(i) => setSortType(i)}
        productData={productData}
        isLoad={isLoad}
      />
    </div>
  );
}

export { Combo };
