import React, { Component } from "react";
import "../styles/App.css";
import BookItem from "./BookItem";
import Header from "./Header";
import NavAddBook from "./NavAddBook";
import SectionBooks from "./SectionBooks";
import Navigation from "./Navigation";
import { BrowserRouter as Router } from "react-router-dom";
// import Modal from "./Modal";

class App extends Component {
  counter = 4;
  minDate = new Date().toISOString().slice(0, 10);
  constructor() {
    super();
    this.activeBooks = this.activeBooks.bind(this);
    this.doneBooks = this.doneBooks.bind(this);
    this.state = {
      books: [],
      select: "",
      value: "",
      date: this.minDate,
      calendarDate: "",
    };
  }

  componentDidMount() {
    fetch("data/jsonTab.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          books: data.books,
        });
      });
    // console.log(this.setState.books);
  }

  openModal = () => {};

  addBook = (bookId, checked, date) => {
    console.log(bookId);
    const books = [...this.state.books];
    books.forEach((book) => {
      if (book.id === bookId) {
        book.active = true;
      }
      if (book.id === bookId && checked) {
        book.important = true;
      }
    });
    this.setState({
      books: books,
    });
    console.log(books);
    this.activeBooks(); //wywołanie ksiazki

    this.setState({
      calendarDate: date,
    });
  };

  activeBooks = () => {
    const active = this.state.books.filter((book) => book.active);
    let activeBooks = active.map((book) => (
      <BookItem
        key={book.id}
        book={book}
        change={this.changeBookStatus}
        calendarDate={this.state.calendarDate}
      />
    ));

    return (
      <>
        {activeBooks.length > 0 ? (
          activeBooks
        ) : (
          <p>BRAK WYPOŻYCZONYCH KSIĄŻEK</p>
        )}
      </>
    );
  };

  changeBookStatus = (id) => {
    console.log("change elementu o id" + id);
    const books = Array.from(this.state.books);
    books.forEach((book) => {
      if (book.id === id) {
        book.active = false;
        book.activeReturnedBook = true;
        book.finishDate = new Date().getTime();
      }
    });
    this.setState({
      books,
    });
  };

  doneBooks = () => {
    const done = this.state.books.filter((book) => book.activeReturnedBook);
    let returnedBooks = done.map((book) => (
      <BookItem
        key={book.id}
        book={book}
        delete={this.deleteBook}
        calendarDate={this.state.calendarDate}
      />
    ));
    return (
      <>
        {returnedBooks.length > 0 ? (
          returnedBooks
        ) : (
          <p>WSZYSTKIE KSIĄŻKI ZOSTAŁY ZWRÓCONE</p>
        )}
      </>
    );
  };

  deleteBook = (id) => {
    console.log("delete elementu o id" + id);
    const books = [...this.state.books];
    const index = books.findIndex((book) => book.id === id);
    books.splice(index, 1);
    this.setState({
      books,
    });
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    console.log(maxDate);
    maxDate = maxDate + "-12-31";

    return (
      <Router>
        <div className="grid">
          <Header />
          <NavAddBook
            addBook={this.addBook}
            // date={this.date}
            passBooks={[...this.state.books]}
          />
          <SectionBooks
            activeBooks={this.activeBooks()}
            doneBooks={this.doneBooks()}
          />
          {<Navigation />}
        </div>
      </Router>
    );
  }
}

export default App;
