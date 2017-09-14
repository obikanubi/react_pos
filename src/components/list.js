import React, { Component } from 'react';
import Cart from './cart';

class List extends Component {

  render() {
    return (
      <div className="row">
        <div className="app-list">
          <Cart />
        </div>
      </div>
    );
  }
}

export default List;
