import React, { Component } from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import BookListItem from "../BookListItem";
import withBookStoreService from "../hoc/with-bookstore-service";
import { booksLoaded } from "../../actions";
import "./BookList.css";
class BookList extends Component {
  componentDidMount() {
    const { bookstoreService, booksLoaded } = this.props;
    const data = bookstoreService.getBooks();
    booksLoaded(data);
  }
  render() {
    const { books } = this.props;
    return (
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem book={book} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ books }) => {
  return { books };
};

const mapDispatchToProps = { booksLoaded };
export default withBookStoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList)
);
