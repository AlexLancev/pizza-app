import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { ApplicationCompleted } from "../ApplicationCompleted";
import { useSelector } from "react-redux";

function Layout({ onRemoveItem }) {
  const { cartSubmit } = useSelector((state) => state.submit);

  return (
    <>
      <Header onRemoveItem={onRemoveItem} />
      <main className="main">
      {cartSubmit && <ApplicationCompleted />}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export { Layout };
