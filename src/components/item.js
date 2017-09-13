import React, { Component } from 'react';

class Item extends Component {

  placeOrder() {
    console.log("clicked");
  };

  render() {
    return (
        <div className="col-4 box" onClick={this.placeOrder}>
          <strong>{this.props.item.name}</strong> <br />
          {this.props.item.price}
        </div>
    );
  }
}

export default Item;
