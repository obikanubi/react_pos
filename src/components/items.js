import React, { Component } from 'react';
import Item from './item';

class Items extends Component {
  sendItem(order) {
    this.props.handleGetItem(order);
  }

  render() {
    let items;
    if(this.props.items) {
      items = this.props.items.map(item => {
        return (
          <Item key={item.id} item={item} handleSetItem={this.sendItem.bind(this)}/>
        )
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
