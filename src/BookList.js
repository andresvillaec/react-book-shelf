import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookItem from './BookItem'

export class BookList extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateShelf: PropTypes.func.isRequired,
    }

    render() {
        const { books, onUpdateShelf } = this.props; 

        return (
          <ol className="books-grid">
            {books && books.map((book) => (
              <li key={book.id} className='book-list-item'>
                <BookItem 
                onUpdateShelf = {onUpdateShelf} 
                book = {book}/>
              </li>
            ))}
          </ol>
        )
    }
}

export default BookList
