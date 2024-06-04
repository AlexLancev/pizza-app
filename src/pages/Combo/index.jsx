import React, { useEffect, useState } from "react";
import axios from "axios";
import { List } from "../../components/List";
import { useSelector } from "react-redux";
import { Pagination } from "../../components/Pagination";
import { useDispatch } from "react-redux";
import { currentProduct } from "../../redux/currentProductList/reducer";
const API_KEY_COMBO = process.env.REACT_APP_API_KEY_COMBO;

function Combo({ onAddToCart }) {
  const [isLoad, setIsLoad] = useState(true);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [allProducts, setAllProducts] = useState([]);
  const dispatch = useDispatch();
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
        `https://${API_KEY_COMBO}.mockapi.io/combo?&sortBy=${sortBy}&order=${order}${search}`
      )
      .then((response) => {
        setAllProducts(response.data);
        setIsLoad(false);
      })
      .catch((error) => {
        console.error("Ошибка получения данных: ", error);
      });
    window.scrollTo(0, 0);
  }, [sortBy, order, search, dispatch]);

  useEffect(() => {
    const currentPageProducts = allProducts.slice(
      (pageCurrent - 1) * limit,
      pageCurrent * limit
    );
    dispatch(currentProduct(currentPageProducts));
  }, [allProducts, pageCurrent, dispatch, limit]);

  return (
    <div className="container">
       <List
        value={sortType}
        onChangeSort={(i) => setSortType(i)}
        isLoad={isLoad}
        onAddToCart={onAddToCart}
      />
      {allProducts.length > limit && (
        <Pagination
          limit={limit}
          total={allProducts.length}
          onChangePage={(number) => setPageCurrent(number)}
        />
      )}
    </div>
  );
}

export { Combo };

