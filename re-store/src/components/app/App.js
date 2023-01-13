import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, CardPage } from "../pages";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/card" element={<CardPage />} />
      </Routes>
    </div>
  );
};

export default App;
