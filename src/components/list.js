import React, { Component } from 'react';
import Cart from './cart';

class List extends Component {
  sendItem(order) {
    this.props.handleGetItem(order);
  }

  render() {
    let cart;
    if (this.props.items) {
      cart = this.props.items.map(order => {
        return (
          <Cart key={order.id} order={order} handleSendItem={this.sendItem.bind(this)}/>
        )
      });
    }
    return (
      <div className="row">
          {cart}
      </div>
    );
  }
}

export default List;
