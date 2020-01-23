import React, { Component } from 'react';
import Header from './components/header';
import './app.scss';
import Headline from './components/headline';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts"/>
        </section>
      </div>
    );
  }
}

process.title = 'redux-jest-enzyme';

export default App;
