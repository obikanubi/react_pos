import React, { Component } from 'react';

class Items extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="app-items">
        <div className="row">
          <div className="col-4 box">
            1111
          </div>
          <div className="col-4 box">
            2222
          </div>
          <div className="col-4 box">
            3333
          </div>
        </div>
        <div className="row">
          <div className="col-4 box">
            4444
          </div>
          <div className="col-4 box">
            5555
          </div>
          <div className="col-4 box">
            6666
          </div>
        </div>
      </div>
    );
  }
}

export default Items;
