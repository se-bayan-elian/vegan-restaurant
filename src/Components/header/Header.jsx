"use client";
import { VEGAN_INFO } from "@/Mock/info";
import React, { Component } from "react";
import "./Header.css";
import Navbar from "./Navbar";
import SectionButton from "../global/secBtn/SectionButton";
export default class Header extends Component {
  render() {
    return (
      // variant either with content or no-content
      // used for reverse route which not include the content of header
      <header
        className={`main-header ${
          this.props.variant != "withContent" ? "no-content" : ""
        }`}
        style={{
          background: `url(${VEGAN_INFO.header.bg}) no-repeat `,
          backgroundSize: "cover",
        }}
      >
        <div className="overlay">
          {/* navbar component render  */}
          <Navbar />
          {/* content Component  */}
          {this.props.variant == "withContent" && (
            <div className="header-content">
              <p>
                Explore the authentic vegan dishes with your friends and family
              </p>
              {/* global component btn  */}
              <SectionButton content="Read more" href="/" />
            </div>
          )}
        </div>
      </header>
    );
  }
}
