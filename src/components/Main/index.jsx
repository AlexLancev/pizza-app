// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { List } from "../List";

function Main() {
  // const [productData, setProductData] = useState([]);
  // const [isLoad, setIsLoad] = useState(true);

  // useEffect(() => {
  //   setIsLoad(true);
  //   axios
  //     .get("https://661fb10916358961cd952913.mockapi.io/pizza")
  //     .then((response) => {
  //       setProductData(response.data);
  //       setIsLoad(false);
  //     })
  //     .catch((error) => {
  //       console.error("Ошибка получения данных: ", error);
  //     });
  // }, []);

  return (
    <div className="container">
      {/* <List productData={productData} isLoad={isLoad} /> */}
    </div>
  );
}

export { Main };
