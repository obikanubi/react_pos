import React, { Component } from 'react';
import './App.css';

import Items from './components/items';
import List from './components/list';
import Total from './components/total';

class App extends Component {
  constructor() {
    super();
    this.getItem = this.getItem.bind(this);

    this.state = {
      items: [],
      cart: [],
      total: 0
    }
  }

  getItem(order) {
    let orders = this.state.cart;
    let x = this.state.items
    for(var i = 0; i < orders.length; i++){
      if(orders[i].id === order.id){
        order = orders[i];
        orders.splice(i, 1);
        order = {
          id: order.id,
          name: order.name,
          quantity: order.quantity += 1,
          price: x[i].price * order.quantity
        }
      }
    }
    this.setState({
      cart: this.state.cart.concat(order)
    })
  }

  deleteItem(order) {
    let orders = this.state.cart;

    for(var i = 0; i < orders.length; i++){
      if(orders[i].id === order.id){
        orders.splice(i, 1);
      }
    }
    this.setState({
      cart: orders
    })
  }

  getTotal() {
    let orders = this.state.cart;
    let total = 0
    for(var i = 0; i < orders.length; i++) {
      total += orders[i].price
    }
    this.setState({
      total: total
    })
  }

  componentWillMount() {
    this.setState(
      {items: [
      {
        id: "0001",
        name: "Milk",
        quantity: 1,
        price: 100
      },
      {
        id: "0002",
        name: "Bread",
        quantity: 1,
        price: 200
      },
      {
        id: "0003",
        name: "Butter",
        quantity: 1,
        price: 300
      },
      {
        id: "0004",
        name: "Cheese",
        quantity: 1,
        price: 400
      },
      {
        id: "0005",
        name: "Bacon",
        quantity: 1,
        price: 500
      },
      {
        id: "0006",
        name: "Cake",
        quantity: 1,
        price: 600
      }
    ]});
  }
  render() {
    return (
      <div className="my_app">
        <Items items={this.state.items} handleGetItem={this.getItem}/>
        <List items={this.state.cart} handleDeleteItem={this.deleteItem.bind(this)} handleGetItem={this.getItem}/>
        <Total total={this.state.total} handleGetTotal={this.getTotal.bind(this)}/>
      </div>
    );
  }
}

export default App;
