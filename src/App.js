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

import { Provider } from 'react-redux';
import {store} from './redux/index';

function App() {
  return (
    <Provider store={store}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="Pizza" element={<Pizza />} />
        <Route path="Combo" element={<Combo />} />
        <Route path="Upsters" element={<Upsters />} />
        <Route path="Snacks" element={<Snacks />} />
        <Route path="Beverages" element={<Beverages />} />
        <Route path="Dessert" element={<Dessert />} />
        <Route path="Sauces" element={<Sauces />} />
        <Route path="/:title" element={<Presentation />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Provider>
  );
}

export default App;
