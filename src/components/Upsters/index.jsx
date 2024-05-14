import React, { useEffect, useState } from "react";
import axios from "axios";
import { List } from "../List";

function Upsters() {
  const [productData, setProductData] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    setIsLoad(true);
    axios
      .get("https://661fb30516358961cd95314b.mockapi.io/upsters")
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

export { Upsters };
