import React, { Component } from 'react';
import Cart from './cart';

class List extends Component {
  sendItem(order) {
    this.props.handleGetItem(order);
  }

  passDelete(order) {
    this.props.handleDeleteItem(order);
  }

  render() {
    let cart;
    if (this.props.items) {
      cart = this.props.items.map(order => {
        return (
          <Cart key={order.id} order={order} handleDelete={this.passDelete.bind(this)} handleSendItem={this.sendItem.bind(this)}/>
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
