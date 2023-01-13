import React from "react";
import BookList from "../BookList";
import ShoppingCartTable from "../ShoppingCartTable";
const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <BookList />
      <ShoppingCartTable />
    </div>
  );
};

export default HomePage;
