import React, { Component } from 'react';

class List extends Component {

  render() {
    return (
      <div className="row">
        <div className="app-list">
          {this.props.name}, {this.props.price}
        </div>
      </div>
    );
  }
}

export default List;
