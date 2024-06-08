import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Layout } from "./components/Layout";
import { Pizza } from "./pages/Pizza";
import { Combo } from "./pages/Combo";
import { Upsters } from "./pages/Upsters";
import { Snacks } from "./pages/Snacks";
import { Beverages } from "./pages/Beverages";
import { Dessert } from "./pages/Dessert";
import { Sauces } from "./pages/Sauces";
import { Presentation } from "./components/Presentation";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Stock } from "./pages/Stock";
import { Delivery } from "./pages/Delivery";
import { cartShow } from "./redux/cart/reducer";
const API_KEY_CART = process.env.REACT_APP_API_KEY_CART;

function App() {
  const { cartProduct } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse] = await Promise.all([
          axios.get(`https://${API_KEY_CART}.mockapi.io/cart`),
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
        (item) =>
          item.name === obj.name && Number(item.cartId) === Number(obj.cartId)
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
          `https://${API_KEY_CART}.mockapi.io/cart/${findItem.id}`
        );
      } else {
        const { data } = await axios.post(
          `https://${API_KEY_CART}.mockapi.io/cart/`,
          obj
        );
        dispatch(cartShow([...cartProduct, data]));
      }
    } catch (error) {
      console.log("Ошибка при добавлении в корзину");
      console.error(error);
    }
  };

  const onRemoveItem = (product) => {
    try {
      axios.delete(`https://${API_KEY_CART}.mockapi.io/cart/${product.id}`);
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

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout onRemoveItem={onRemoveItem} />}
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
        <Route path="Delivery" element={<Delivery />} />
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
