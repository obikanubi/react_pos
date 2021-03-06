import React, { Component } from 'react';

class Total extends Component {
  total() {
    this.props.handleGetTotal();
  }
  render() {
    return (
      <div className="row">
        <div className="app-total">
          <br />
          <button className="btn btn-danger" onClick={this.total.bind(this)}>Place order</button> <strong id="total">Php {this.props.total}</strong>
        </div>
      </div>
    );
  }
}

export default Total;
