import React, { Component } from 'react';
import Header from './components/header';
import './app.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

process.title = 'redux-jest-enzyme';

export default App;
