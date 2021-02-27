import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BookList from './MyReads.js'
import BookSearch from './BookSearch.js'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    searchedBooks: [],
  }

  getAllBooks(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    })
  }

  componentDidMount(){
    this.getAllBooks();
  }

  componentWillUnmount(){
    this.setState({ searchedBooks: []});
    console.log(this.state.searchedBooks);
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((data) => {
      this.getAllBooks();
    })
  }

  clearSearch = () => {
    this.setState({ searchedBooks: []});
  }

  search = (query) => {
    BooksAPI.search(query).then((data) => {
      console.log(data);
      if (!data){
        this.clearSearch();
      }
      else if (data.error){
        this.clearSearch();
      }
      else if (!query){
        this.clearSearch();
      }
      else{
        BooksAPI.getAll().then((books) => {
          let bookList = data.map(function(book){
            var shelfBook = books.filter((myBook) => myBook.id === book.id)

            if (shelfBook && shelfBook.length > 0){
              book.shelf = shelfBook[0].shelf;
            }
          
            return book;
          }); 

          console.log(bookList);
          this.setState({ searchedBooks: bookList }); 
        })
      } 
    })
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
              <Route exact path='/' render={() => (
                <BookList 
                  onUpdateShelf = {this.updateShelf}
                  books = {this.state.books}
                />
              )}/>
              <Route path='/search' render={() => (
                <BookSearch 
                  onUpdateShelf = {this.updateShelf}
                  books = {this.state.searchedBooks}
                  onSearch = {this.search}
                  clearSearch = {this.clearSearch}
                />
              )}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default BooksApp
