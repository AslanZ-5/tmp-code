import React from "react";
import "./App.css";
import withBookStoreService from "../hoc/with-bookstore-service";
const App = ({ bookstoreService }) => {
  console.log(bookstoreService.getBooks());
  return <div className="App">Re store app</div>;
};

export default withBookStoreService()(App);
