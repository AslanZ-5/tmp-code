import React from "react";
import ShopHeader from "../ShopHeader/ShopHeader";
import { Routes, Route } from "react-router-dom";
import { HomePage, CartPage } from "../pages";
import "./App.css";

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={5} total={210} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </main>
  );
};

export default App;
