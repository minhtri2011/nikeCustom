import { ThemeProvider } from "@mui/material/styles";
import { useAppDispatch, useAppSelector } from "app/hooks";
// import { NotFound } from "component/common/";
import { AnimatePresence } from "framer-motion";
import Admin from "layout/admin/Admin";
import Oder from "pages/Dashboard/Oder/Oder";
import AddProduct from "pages/Dashboard/Product/AddProduct";
import EditProduct from "pages/Dashboard/Product/EditProduct";
import Product from "pages/Dashboard/Product/Product";
import AddUser from "pages/Dashboard/User/AddUser";
import EditUser from "pages/Dashboard/User/EditUser";
import User from "pages/Dashboard/User/User";
import Home from "pages/Home/Home";
import LoginPage from "pages/Login/Login";
import SignUpPage from "pages/SignUp/SignUp";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { Route, Routes } from "react-router-dom";
import AuthRoute from "Routes/AuthRoute";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { darkTheme, lightTheme } from "theme";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
  selectDarkModeThemeReducer,
  ThemeActions,
} from "theme/module/themeSlice";
import "./App.css";
import { ProductActions } from "pages/Dashboard/Product/module/ProductSlice";
import Products from "pages/Products/Products";
import PublicRoute from "Routes/PublicRoute";

function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector(selectDarkModeThemeReducer);
  const darkmode = JSON.parse(localStorage.getItem("darkmode") || "false");
  useEffect(() => {
    dispatch(ThemeActions.setTheme(darkmode));
    dispatch(ProductActions.fetchProducts())
  }, [darkmode, dispatch]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>

          <Route element={<PublicRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products/>} />
          </Route>

          <Route element={<AuthRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signUp" element={<SignUpPage />} />
          </Route>
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
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
