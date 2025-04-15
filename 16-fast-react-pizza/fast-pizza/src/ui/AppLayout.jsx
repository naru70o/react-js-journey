import { Outlet, useNavigate, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigate = useNavigation();
  const isLoading = navigate.state === "loading";
  return (
    <div className="layout">
      <Header />

      {isLoading && <Loader />}
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
