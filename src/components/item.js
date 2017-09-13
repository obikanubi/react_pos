import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
        <div className="col-4 box">
          {this.props.item.name}: <br />
          {this.props.item.price}
        </div>
    );
  }
}

export default Item;
