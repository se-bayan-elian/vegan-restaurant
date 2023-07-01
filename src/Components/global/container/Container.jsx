import React, { Component } from "react";
import './container.css'
export default class Container extends Component {
  render() {
    return (
      <div className={`container ${this.props.variant}`}>
        {this.props.children}
      </div>
    );
  }
}
