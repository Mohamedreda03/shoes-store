import "./App.css";
import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Category from "./pages/category/Category";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";

import Failed from "./pages/Failed";
import Success from "./pages/Success";
import ShopingCar from "./pages/ShopingCar";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="min-h-[100vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="category/:slug" element={<Category />} />
          <Route path="product/:slug" element={<ProductDetails />} />
          <Route path="productcar" element={<ShopingCar />} />
          <Route path="productcar/failed" element={<Failed />} />
          <Route path="productcar/success" element={<Success />} />
          <Route path="productcar/checkout" element={<Checkout />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
