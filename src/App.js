import React, { Component } from 'react';
import './App.css';

import Items from './components/items';
import List from './components/list';
import Total from './components/total';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
  }

  componentWillMount() {
    this.setState(
      {items: [
      {
        id: "1111",
        name: "Item 1",
        price: 100
      },
      {
        id: "2222",
        name: "Item 2",
        price: 200
      },
      {
        id: "3333",
        name: "Item 3",
        price: 300
      },
      {
        id: "4444",
        name: "Item 4",
        price: 400
      },
      {
        id: "5555",
        name: "Item 5",
        price: 500
        },
      {
        id: "6666",
        name: "Item 6",
        price: 600
      }
    ]});
  }
  render() {
    return (
      <div className="my_app">
        <Items items={this.state.items}/>
        <List />
        <Total />
      </div>
    );
  }
}

export default App;
