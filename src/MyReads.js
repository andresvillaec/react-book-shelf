import React, { Component } from 'react'
import BookShelf from './BookShelf.js'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class MyReads extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired,
  }

  render() {
      const { books, onUpdateShelf } = this.props
      console.log(books);

      return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <BookShelf 
            title = 'Currently Reading' 
            onUpdateShelf = {onUpdateShelf}
            booksByShelf = {books.filter((book) => book.shelf === 'currentlyReading')} />
          <BookShelf 
            title = 'Want to Read' 
            onUpdateShelf = {onUpdateShelf}
            booksByShelf = {books.filter((book) => book.shelf === 'wantToRead')} />
          <BookShelf 
            title = 'Read' 
            onUpdateShelf = {onUpdateShelf}
            booksByShelf = {books.filter((book) => book.shelf === 'read')} />
          <Link
              to='/search'
              className='open-search'
              >Add a book</Link>
        </div>
      )
  }
}

export default MyReads 
