import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookList from './BookList'

export class BookShelf extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        booksByShelf: PropTypes.array.isRequired,
        onUpdateShelf: PropTypes.func.isRequired,
    }

    render() {
        const { title, booksByShelf, onUpdateShelf } = this.props; 

        return (
            <div className="bookshelf">
              <h2 className="bookshelf-title">{title}</h2>
              <div className="bookshelf-books">
                <BookList 
                  onUpdateShelf = {onUpdateShelf} 
                  books = {booksByShelf}/>
              </div>
            </div>
        )
    }
}

export default BookShelf
