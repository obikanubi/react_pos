import React, { Component } from 'react';

class Cart extends Component {
  quantityUp() {
    let order = {
      id: this.props.order.id,
      name: this.props.order.name,
      quantity: this.props.order.quantity += 1,
      price: this.props.order.price,
    }
    console.log(this.props.handleSendItem(order))
  }
  delete() {
    console.log('clicked');
  }
  render() {
    return (
        <div className="app-order">
          <button className="btn-danger" onClick={this.delete.bind(this)}>X</button>
          <strong>Order: </strong>{this.props.order.name}
          <strong>Quantity: </strong> <button onClick={this.quantityUp.bind(this)}>{this.props.order.quantity}</button>
          <strong>Price: </strong>{this.props.order.price}
        </div>
    );
  }
}

export default Cart;
