import React from "react";
import { BSSConsumer } from "../book-store-service-context";

const withBookStoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <BSSConsumer>
        {(bookstoreService) => {
          return <Wrapped {...props} bookstoreService={bookstoreService} />;
        }}
      </BSSConsumer>
    );
  };
};

export default withBookStoreService;
