import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";

function Layout({ onRemoveItem }) {
  return (
    <>
      <Header onRemoveItem={onRemoveItem} />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export { Layout };
