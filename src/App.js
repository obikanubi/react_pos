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
        id: "0001",
        name: "Milk",
        price: 100
      },
      {
        id: "0002",
        name: "Bread",
        price: 200
      },
      {
        id: "0003",
        name: "Butter",
        price: 300
      },
      {
        id: "0004",
        name: "Cheese",
        price: 400
      },
      {
        id: "0005",
        name: "Bacon",
        price: 500
        },
      {
        id: "0006",
        name: "Cake",
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
