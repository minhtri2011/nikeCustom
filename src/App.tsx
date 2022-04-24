import { ThemeProvider } from "@mui/material/styles";
import { NotFound } from "component/common";
import { AnimatePresence } from "framer-motion";
import Admin from "layout/admin/Admin";
import User from "pages/Dasboard/User/User";
import LoginPage from "pages/Login/Login";
import SignUpPage from "pages/SignUp/SignUp";
import React from "react";
import { useLocation } from "react-router";
import { Route, Routes } from "react-router-dom";
import AuthRoute from "Routes/AuthRoute";
import { lightTheme } from "theme";
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <ThemeProvider theme={lightTheme}>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          {/* Auth route for login and redirect form */}
          <Route element={<AuthRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signUp" element={<SignUpPage />} />
          </Route>
          <Route element={<Admin />}>
            <Route path="/dashboard" element={<User />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
