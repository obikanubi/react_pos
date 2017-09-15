import React, { Component } from 'react';

class Item extends Component {
  placeOrder() {
    let order = {
      id: this.props.item.id,
      name: this.props.item.name,
      quantity: this.props.item.quantity,
      price: this.props.item.price
    }
    this.props.handleSetItem(order)
  };

  render() {
    return (
        <div className="col-4 box btn btn-secondary" onClick={this.placeOrder.bind(this)}>
          <strong>{this.props.item.name}</strong> <br />
          {this.props.item.price}
        </div>
    );
  }
}

export default Item;
