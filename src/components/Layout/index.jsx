import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";

function Layout({ cart, onRemoveItem }) {
  return (
    <>
      <Header cart={cart} onRemoveItem={onRemoveItem} />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export { Layout };
