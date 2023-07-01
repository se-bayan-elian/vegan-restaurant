import Link from "next/link";
import React, { Component } from "react";
import "./btn.css";
export default class SectionButton extends Component {
  render() {
    return (
      <div className="sec-btn">
        <Link href={this.props.href}>{this.props.content}</Link>
      </div>
    );
  }
}
