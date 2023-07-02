import { VEGAN_INFO } from "@/Mock/info";
import Link from "next/link";
import React, { Component } from "react";
import './middle.css'
export default class MiddleItem extends Component {
  render() {
    return (
      <div className="mid-item">
        <h1>Other Links</h1>
        <ul className="hyper-links">
          {VEGAN_INFO.contactUs.hyperLinks.map((link) => (
            <li key={link}>
              <Link href="#!">{link}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
