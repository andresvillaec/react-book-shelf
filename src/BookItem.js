import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class BookItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shelf: this.props.book.shelf ? this.props.book.shelf : 'none'
    };
  }

  static propTypes = {
    book: PropTypes.object.isRequired,
    onUpdateShelf: PropTypes.func.isRequired,
  }

  handleChange = (event) => {
    this.setState({shelf: event.target.value});
    this.props.onUpdateShelf(this.props.book, event.target.value);
  }

  update = (book, shelf)  => {
    //The callback is getting called.
    this.props.update(book, shelf);
  };
  
  render() {
      const { book } = this.props;
      const imageUrl = book.imageLinks && book.imageLinks.smallThumbnail ? book.imageLinks.smallThumbnail : '';

      return (
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageUrl})` }}></div>
            <div className="book-shelf-changer">
              <select value={this.state.shelf} onChange={this.handleChange}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      )
  }
}

export default BookItem
