import React, { Component } from 'react';

class Item extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    }
  }

  placeOrder() {
    alert(this.props.item.name);
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
