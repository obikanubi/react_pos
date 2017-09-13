import React, { Component } from 'react';
import './App.css';

import Items from './components/items';
import List from './components/list';
import Total from './components/total';

class App extends Component {
  render() {
    return (
      <div className="my_app">
        <Items />
        <List />
        <Total />
        <p>Test</p>
      </div>
    );
  }
}

export default App;
