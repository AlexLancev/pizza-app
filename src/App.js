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
import { Provider } from "react-redux";
import { store } from "./redux/index";
import axios from "axios";

function App() {
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse] = await Promise.all([
          axios.get("https://6639ca471ae792804becc79a.mockapi.io/cart"),
        ]);

        setCartItems(cartResponse.data);
      } catch (error) {
        console.log("Ошибка при запросе данных ;(");
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find(
        (item) => Number(item.cartId) === Number(obj.cartId)
      );
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.cartId) !== Number(obj.cartId))
        );
        await axios.delete(
          `https://6639ca471ae792804becc79a.mockapi.io/cart/${findItem.id}`
        );
      } else {
        const { data } = await axios.post(
          `https://6639ca471ae792804becc79a.mockapi.io/cart/`,
          obj
        );
        setCartItems((prev) => [...prev, data]);

        setCartItems((prev) =>
          prev.map((item) => {
            if (item.id === data.id) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
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
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(product.id))
      );
    } catch (error) {
      alert("Ошибка при удалении из корзины");
      console.error(error);
    }
  };

  return (
    <Provider store={store}>
      <Routes>
        <Route
          path="/"
          element={<Layout cart={cartItems} onRemoveItem={onRemoveItem} />}
        >
          <Route
            path="Pizza"
            element={<Pizza onAddToCart={onAddToCart} cart={cartItems} />}
          />
          <Route path="Combo" element={<Combo />} />
          <Route path="Upsters" element={<Upsters />} />
          <Route path="Snacks" element={<Snacks />} />
          <Route path="Beverages" element={<Beverages />} />
          <Route path="Dessert" element={<Dessert />} />
          <Route path="Sauces" element={<Sauces />} />
          <Route
            path="/:title"
            element={
              <Presentation cart={cartItems} onAddToCart={onAddToCart} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
