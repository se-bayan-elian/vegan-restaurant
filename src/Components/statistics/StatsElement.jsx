import Image from "next/image";
import React, { Component } from "react";

export default class StatsElement extends Component {
  render() {
    return (
      <div className="stats-element">
        <div className="img">
          <Image
            src={this.props.img}
            alt=""
            width={85.66}
            height={79.012}
          ></Image>
        </div>
        <div className="stats-info">
          <span className="stats-number">{this.props.number}</span>
          <span className="stats-name">{this.props.name}</span>
        </div>
      </div>
    );
  }
}
