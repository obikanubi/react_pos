import React, { Component } from 'react';
import Item from './item';
class Items extends Component {
  render() {
    let items;
    if(this.props.items) {
      items = this.props.items.map(item => {
        return (
          <Item item={item}/>
        );
      });
    }
    return (
      <div className="app-items">
        <div className="row">
          {items}
        </div>
      </div>
    );
  }
}

export default Items;
