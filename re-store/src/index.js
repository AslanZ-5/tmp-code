import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry/ErrorBoundry";
import BookstoreService from "./services/bookstore-service";
import { BSSProvider } from "./components/book-store-service-context";
import store from "./store";

const BSService = new BookstoreService();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BSSProvider value={BSService}>
        <Router>
          <App />
        </Router>
      </BSSProvider>
    </ErrorBoundry>
  </Provider>
);
