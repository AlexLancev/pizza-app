import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Pizza } from "./components/Pizza";
import { Combo } from "./components/Combo";
import { Upsters } from "./components/Upsters";
import { Snacks } from "./components/Snacks";
import { Beverages } from "./components/Beverages";
import { Dessert } from "./components/Dessert";
import { Sauces } from "./components/Sauces";
import { Presentation } from "./components/Presentation";
import { NotFoundPage } from "./components/NotFoundPage";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Stock } from "./components/Stock";
import { cartShow } from "./redux/cart/reducer";
import axios from "axios";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse] = await Promise.all([
          axios.get("https://6639ca471ae792804becc79a.mockapi.io/cart"),
        ]);

        dispatch(cartShow(cartResponse.data));
      } catch (error) {
        console.log("Ошибка при запросе данных ;(");
        console.error(error);
      }
    }

    fetchData();
  }, [dispatch]);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartProduct.find(
        (item) => Number(item.cartId) === Number(obj.cartId)
      );
      if (findItem) {
        dispatch(
          cartShow(
            cartProduct.filter(
              (item) => Number(item.cartId) !== Number(obj.cartId)
            )
          )
        );
        await axios.delete(
          `https://6639ca471ae792804becc79a.mockapi.io/cart/${findItem.id}`
        );
      } else {
        const { data } = await axios.post(
          `https://6639ca471ae792804becc79a.mockapi.io/cart/`,
          obj
        );
        dispatch(cartShow([...cartProduct, data]));

        // dispatch(cartShow(cartProduct.map((item) => {
        //     if (item.id === data.id) {
        //       return {
        //         ...item,
        //         id: data.id,
        //       };
        //     }
        //     return item;
        //   })))
      }
    } catch (error) {
      console.log("Ошибка при добавлении в корзину");
      console.error(error);
    }
  };

  const onRemoveItem = (product) => {
    try {
      axios.delete(
        `https://6639ca471ae792804becc79a.mockapi.io/cart/${product.id}`
      );
      dispatch(
        cartShow(
          cartProduct.filter((item) => Number(item.id) !== Number(product.id))
        )
      );
    } catch (error) {
      alert("Ошибка при удалении из корзины");
      console.error(error);
    }
  };

  const cartProduct = useSelector((state) => state.cart.cartProduct);

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout cart={cartProduct} onRemoveItem={onRemoveItem} />}
      >
        <Route path="Pizza" element={<Pizza onAddToCart={onAddToCart} />} />
        <Route path="Combo" element={<Combo onAddToCart={onAddToCart} />} />
        <Route path="Upsters" element={<Upsters onAddToCart={onAddToCart} />} />
        <Route path="Snacks" element={<Snacks onAddToCart={onAddToCart} />} />
        <Route
          path="Beverages"
          element={<Beverages onAddToCart={onAddToCart} />}
        />
        <Route path="Dessert" element={<Dessert onAddToCart={onAddToCart} />} />
        <Route path="Sauces" element={<Sauces onAddToCart={onAddToCart} />} />
        <Route path="Stock" element={<Stock />} />
        <Route
          path="/:title"
          element={<Presentation onAddToCart={onAddToCart} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
