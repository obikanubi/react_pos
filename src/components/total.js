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
          <button className="btn btn-success" onClick={this.total.bind(this)}>Total</button> <strong>Php {this.props.total}</strong>
        </div>
      </div>
    );
  }
}

export default Total;
