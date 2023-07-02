'use client'
import React, { Component } from "react";
export default class Footer extends Component {
  style = {
    textAlign: "center",
    color: "#FFF",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "24px",
  };
  render() {
    return (
      <footer
        style={{
          background: "rgba(16, 20, 24, 0.70)",
          padding: "13px 0px",
        }}
      >
        <p style={this.style}>
          Copyright © {new Date().getFullYear()} Golden Dine website
        </p>
        <p style={this.style}>All rights reserved</p>
      </footer>
    );
  }
}
