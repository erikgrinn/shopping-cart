import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import App from "./components/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="shop" element={<App />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
