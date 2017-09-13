import React, { Component } from 'react';

class List extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    }
  }
  
  render() {
    return (
      <div className="app-list">
        <div className="row">
        </div>
      </div>
    );
  }
}

export default List;
