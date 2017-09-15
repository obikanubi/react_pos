import React, { Component } from 'react';

class Cart extends Component {
  delete() {
    let order = this.props.order
    this.props.handleDelete(order);
  }

  render() {
    return (
        <div className="app-order btn btn-info">
          <button className="btn-danger" onClick={this.delete.bind(this)}>X</button>
          <strong>Order: </strong>{this.props.order.name}
          <strong>Quantity: </strong>{this.props.order.quantity}
          <strong>Price: </strong>{this.props.order.price}
        </div>
    );
  }
}

export default Cart;
