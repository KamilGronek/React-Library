import React, { Component } from "react";
import "../styles/AddBook.css";

class NavAddBook extends Component {
  constructor() {
    super();
    this.minDate = new Date().toISOString().slice(0, 10);
    this.state = {
      bookId: 1,
      text: "",
      checked: false,
      date: this.minDate,
    };
  }

  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
    console.log(e.target.value);
  };

  handleCheckbox = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  };

  handleSelect = (e) => {
    this.setState({
      bookId: +e.target.value,
    });
  };

  handleActive = (e) => {
    // przycisk  // "enter"
    const { bookId, checked, date } = this.state;
    e.preventDefault();
    console.log(this.state.date);

    const add = this.props.addBook(bookId, checked, date);
    if (add) {
      this.setState({
        bookId: 1,
        checked: false,
        date: this.minDate,
      });
    }
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";
    return (
      <nav className="menu">
        <form>
          <label>Wypożycz książki: </label>
          <select value={this.state.bookId} onChange={this.handleSelect}>
            {this.props.passBooks.map((book) => (
              <option key={book.id} value={book.id}>
                {book.title}
              </option>
            ))}
          </select>
          <input
            type="checkbox"
            checked={this.state.checked}
            id="important"
            onChange={this.handleCheckbox}
          />
          <label htmlFor="important">Priorytet</label>
          <br />
          <br />
          <label htmlFor="date"> Do kiedy oddać książkę: </label>
          <input
            type="date"
            value={this.state.date}
            min={this.minDate}
            max={maxDate}
            onChange={this.handleDate}
          />
          <br />
          <hr className="new4" />
          <div className="centerize">
            <button onClick={this.handleActive}>WYPOŻYCZ</button>
          </div>
        </form>
      </nav>
    );
  }
}

export default NavAddBook;
