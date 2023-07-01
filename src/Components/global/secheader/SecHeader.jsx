import React, { Component } from "react";
import "./secHeader.css";
import { Dancing_Script } from "next/font/google";
const dancingScript = Dancing_Script({ subsets: ["latin"] });
export default class SecHeader extends Component {
  render() {
    return (
      <header className={`sec-header ${this.props.variant}`}>
        <h1 className={`sec-title ${dancingScript.className} `}>
          {this.props.title}
        </h1>
        <h2 className="sec-desc">{this.props.desc}</h2>
      </header>
    );
  }
}
