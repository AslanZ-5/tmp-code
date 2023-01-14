const booksLoaded = (newBooks) => {
  return {
    type: "FETCH_BOOKS_SUCCESS",
    payload: newBooks,
  };
};
const booksRequested = () => {
  return {
    type: "FETCH_BOOKS_REQUEST",
  };
};
const booksError = (error) => {
  return {
    type: "FETCH_BOOKS_FAILURE",
    payload: error,
  };
};
const fetchingBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookstoreService
    .getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((error) => dispatch(booksError(error)));
};
const bookAddedToCart = (id) => {
  return {
    type: "BOOK_ADDED_TO_CART",
    payload: id,
  };
};
const bookRemovedFromCart = (id) => {
  return {
    type: "BOOK_REMOVED_FROM_CARD",
    payload: id,
  };
};
const allBooksRemovedFromCart = (id) => {
  return {
    type: "ALL_BOOKS_REMOVED_FROM_CARD",
    payload: id,
  };
};
export {
  fetchingBooks,
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart,
};
