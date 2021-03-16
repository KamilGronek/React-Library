import React, { Component } from "react";

class BookItem extends Component {
  constructor() {
    super();

    this.state = {
      // date: this.minDate,
      // calendarDate: "",
    };
  }

  render() {
    const style = {
      color: "red",
    };

    const dateReverse = this.props.calendarDate.replace(
      /(\d{4})-(\d\d)-(\d\d)/,
      "$3-$2-$1"
    );

    const {
      id,
      title,
      author,
      releaseDate,
      pages,
      link,
      important,
      active,
      finishDate,
    } = this.props.book;

    if (active) {
      return (
        <div className="book">
          <span className="bolder">{id}</span>
          <img src={this.props.book.cover.small} alt="" />
          <h3>{title}</h3>
          <hr className="new" />
          <h4>
            <i>
              <span className="lighter">By {author}</span>
            </i>
          </h4>
          <p>
            <i>
              Release Date: {releaseDate}
              <br />
              Pages: {pages}
              <br />
              <span>
                Links: <a href={link}>shop</a>
              </span>
            </i>
            <br />
            <p>
              <em style={important ? style : null}>(oddać do {dateReverse})</em>
            </p>
            <button onClick={() => this.props.change(id)}>Oddaj książkę</button>
          </p>
        </div>
      );
    } else {
      const finish = new Date(finishDate).toLocaleString();

      return (
        <div className="book">
          <span className="bolder">{id}</span>
          <img src={this.props.book.cover.small} alt="" />
          <h3>{title}</h3>
          <hr className="new" />
          <h4>
            <i>
              <span className="lighter">By {author}</span>
            </i>
          </h4>
          <p>
            <i>
              Release Date: {releaseDate}
              <br />
              Pages: {pages}
              <br />
              <span>
                Links: <a href={link}>shop</a>
              </span>
            </i>
            <br />
            <p>
              <em> (oddać do {dateReverse})</em>
            </p>
            <p>
              Potwierdzenie oddania: <span> {finish} </span>
            </p>
            <button className="confirm" onClick={() => this.props.delete(id)}>
              Zatwierdź
            </button>
          </p>
        </div>
      );
    }
  }
}
export default BookItem;
