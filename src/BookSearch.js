import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookList from './BookList'

export class BookSearch extends Component {
  state = {
    query: '',
    errors: '',
  }
  searchOnChange = (query) => {
    this.setState({ query: query.trim() })
    this.props.onSearch(query);
  }

  componentDidMount() {
    this.props.clearSearch();
  }

  render() {
    const { query } = this.state;
    const { onUpdateShelf, books } = this.props;
      
    return (
      <div className="search-books">
          <div className="search-books-bar">
            <Link className='close-search' to='/'>Close</Link>
            {/* <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button> */}
            <div className="search-books-input-wrapper">
                {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input 
                type="text" 
                placeholder="Search by title or author" 
                value={query}
                onChange={(event) => this.searchOnChange(event.target.value)}
                />

            </div>
          </div>
          <div className="search-books-results">
          <BookList
            onUpdateShelf = {onUpdateShelf}
            books = {books} 
          />
        </div>  
      </div>  
    )
  }
}

export default BookSearch
