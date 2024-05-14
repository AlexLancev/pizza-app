import React, { useEffect, useState } from "react";
import { List } from "../List";
import { useSelector } from "react-redux";
import { Pagination } from "../Pagination";
import axios from "axios";

function Pizza() {
  const [productData, setProductData] = useState([]);
  const [isLoad, setIsLoad] = useState(true);
  const [pageCurrent, setPageCurrent] = useState(1);
  const limit = 12;

  const [sortType, setSortType] = useState({
    name: "Цене ( DESC )",
    sortProperty: "price",
  });
  const sortBy = sortType.sortProperty.replace("-", "");
  const order = sortType.sortProperty.includes("-") ? "asc" : "desc";

  const searchProduct = useSelector((state) => state.search.searchProduct);

  const search = searchProduct ? `&search=${searchProduct}` : "";

  useEffect(() => {
    setIsLoad(true);
    axios
      .get(
        `https://661fb10916358961cd952913.mockapi.io/pizza?&sortBy=${sortBy}&order=${order}${search}&page=${pageCurrent}&limit=${limit}`
      )
      .then((response) => {
        setProductData(response.data);
        setIsLoad(false);
      })
      .catch((error) => {
        console.error("Ошибка получения данных: ", error);
      });
    window.scrollTo(0, 0);
  }, [sortBy, order, search, pageCurrent]);

  return (
    <div className="container">
      <List
        value={sortType}
        onChangeSort={(i) => setSortType(i)}
        productData={productData}
        isLoad={isLoad}
      />
      <Pagination limit={limit} onChangePage={(number) => setPageCurrent(number)} />
    </div>
  );
}

export { Pizza };
