import React, { Component } from 'react';
import Cart from './cart';

class Item extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    }
  }

  placeOrder() {
    return (
      <Cart key={this.props.item.id} name={this.props.item.name} price={this.props.item.price}/>
    )
  };

  render() {
    return (
        <div className="col-4 box" onClick={this.placeOrder.bind(this)}>
          <strong>{this.props.item.name}</strong> <br />
          {this.props.item.price}
        </div>
    );
  }
}

export default Item;
