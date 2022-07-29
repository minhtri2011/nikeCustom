import { ThemeProvider } from "@mui/material/styles";
import { useAppDispatch } from "app/hooks";
// import { NotFound } from "component/common/";
import { AnimatePresence } from "framer-motion";
import Admin from "layout/admin/Admin";
import Cart from "pages/Cart/Cart";
import Oder from "pages/Dashboard/Oder/Oder";
import AddProduct from "pages/Dashboard/Product/AddProduct";
import EditProduct from "pages/Dashboard/Product/EditProduct";
import { ProductActions } from "pages/Dashboard/Product/module/ProductSlice";
import Product from "pages/Dashboard/Product/Product";
import AddUser from "pages/Dashboard/User/AddUser";
import EditUser from "pages/Dashboard/User/EditUser";
import User from "pages/Dashboard/User/User";
import Favorites from "pages/Favorites/Favorites";
import Home from "pages/Home/Home";
import Inbox from "pages/Inbox/Inbox";
import Kids from "pages/Kids/Kids";
import LoginPage from "pages/Login/Login";
import Men from "pages/Men/Men";
import { NotFound } from "pages/NotFound/NotFound";
import OrdersUser from "pages/OrdersUser/OrdersUser";
import ProductDetail from "pages/ProductDetail/ProductDetail";
import Products from "pages/Products/Products";
import Profile from "pages/Profile/Profile";
import Setting from "pages/Setting/Setting";
import SignUpPage from "pages/SignUp/SignUp";
import Women from "pages/Women/Women";
import { useEffect } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useLocation } from "react-router";
import { Route, Routes } from "react-router-dom";
import AuthRoute from "Routes/AuthRoute";
import PrivateRoute from "Routes/PrivateRoute";
import PublicRoute from "Routes/PublicRoute";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { lightTheme } from "theme";
import { ThemeActions } from "theme/module/themeSlice";
import "./App.css";

function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  // const darkMode = useAppSelector(selectDarkModeThemeReducer);
  const darkmode = JSON.parse(localStorage.getItem("darkmode") || "false");
  useEffect(() => {
    dispatch(ThemeActions.setTheme(darkmode));
    dispatch(ProductActions.fetchProducts());
  }, [darkmode, dispatch]);

  return (
    //   <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <ThemeProvider theme={lightTheme}>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/detail/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/women" element={<Women />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/men" element={<Men />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/favorite" element={<Favorites />} />
            <Route path="/orders" element={<OrdersUser />} />
            <Route path="/settings" element={<Setting />} />
          </Route>
          <Route element={<AuthRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signUp" element={<SignUpPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route element={<Admin />}>
              <Route path="/dashboard/users" element={<User />} />
              <Route path="/dashboard/users/add" element={<AddUser />} />
              <Route path="/dashboard/users/edit/:id" element={<EditUser />} />
              <Route path="/dashboard/products" element={<Product />} />
              <Route path="/dashboard/products/add" element={<AddProduct />} />
              <Route
                path="/dashboard/products/edit/:id"
                element={<EditProduct />}
              />
              <Route path="/dashboard/oder" element={<Oder />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
