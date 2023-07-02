import Image from "next/image";
import Link from "next/link";
import React, { Component } from "react";

export default class SocialLink extends Component {
  render() {
    return (
      <li>
        <Link href={this.props.link}>
          <Image
            src={this.props.icon}
            alt={this.props.name}
            title={this.props.name}
            width={17}
            height={17}
          />
        </Link>
      </li>
    );
  }
}
