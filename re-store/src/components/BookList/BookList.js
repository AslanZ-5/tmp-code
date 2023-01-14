import React, { Component } from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import BookListItem from "../BookListItem";
import withBookStoreService from "../hoc/with-bookstore-service";
import Spinner from "../Spinner";
import ErrorIndicator from "../error-indicator";
import { fetchingBooks, bookAddedToCart } from "../../actions";
import "./BookList.css";
const BookList = ({ books, onAddedItem }) => {
  return (
    <ul className="book-list">
      {books.map((book) => {
        return (
          <li key={book.id}>
            <BookListItem
              onAddedItem={() => onAddedItem(book.id)}
              book={book}
            />
          </li>
        );
      })}
    </ul>
  );
};

class BookListContainer extends Component {
  componentDidMount() {
    const { fetchingBooks } = this.props;
    fetchingBooks();
  }
  render() {
    const { books, loading, error, onAddedItem } = this.props;
    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorIndicator />;
    }
    return <BookList books={books} onAddedItem={onAddedItem} />;
  }
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return {
    fetchingBooks: fetchingBooks(bookstoreService, dispatch),
    onAddedItem: (id) => dispatch(bookAddedToCart(id)),
  };
};
export default withBookStoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookListContainer)
);
