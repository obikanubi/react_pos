import React, { Component } from 'react';

class Items extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="app-items">
        <p> items on sale here </p>
      </div>
    );
  }
}

export default Items;
