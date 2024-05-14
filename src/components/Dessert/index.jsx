import React, { useEffect, useState } from "react";
import axios from "axios";
import { List } from "../List";

function Dessert() {
  const [productData, setProductData] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    setIsLoad(true);
    axios
      .get("https://661fb26b16358961cd952ea5.mockapi.io/dessert")
      .then((response) => {
        setProductData(response.data);
        setIsLoad(false);
      })
      .catch((error) => {
        console.error("Ошибка получения данных: ", error);
      });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <List productData={productData} isLoad={isLoad} />
    </div>
  );
}

export { Dessert };
