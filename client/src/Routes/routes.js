import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import CartProduct from "../components/CartProduct";
import Checkout from "../components/Checkout";
import DetailProduct from "../components/DetailProduct";
import Shop from "../components/Shop";
import OrderUser from "../components/User/OrderUser";
import Home from "../page/Home";

const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/detail/:id",
    component: DetailProduct,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/cart",
    component: CartProduct,
  },
  {
    path: "/shop",
    component: Shop,
  },
  {
    path: "/Checkout",
    component: Checkout,
  },
  {
    path: "/OrderUser",
    component: OrderUser,
  },
];

export default publicRoutes;
