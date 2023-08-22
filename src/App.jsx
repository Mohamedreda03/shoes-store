import "./App.css";
import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Category from "./pages/category/Category";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import ShopingCar from "./pages/shopingCar";
import Failed from "./pages/Failed";
import Success from "./pages/Success";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="min-h-[100vh]">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="category" element={<Category />} />
                    <Route path="productdetails" element={<ProductDetails />} />
                    <Route path="productcar" element={<ShopingCar />} />
                    <Route path="productcar/failed" element={<Failed />} />
                    <Route path="productcar/success" element={<Success />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
