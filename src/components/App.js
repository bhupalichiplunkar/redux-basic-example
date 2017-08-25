import React, { Component } from 'react';
import BookList from './../containers/book-list';
import ActiveBookDetail from './../containers/active-book-detail';
import './../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookList />
        <ActiveBookDetail />
      </div>
    );
  }
}

export default App;
