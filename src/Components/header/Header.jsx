"use client";
import { VEGAN_INFO } from "@/Mock/info";
import React, { Component } from "react";
import "./Header.css";
import Navbar from "./Navbar";
import SectionButton from "../global/SectionButton";
export default class Header extends Component {
  render() {
    return (
      <header
        className="main-header"
        style={{ background: `url(${VEGAN_INFO.header.bg}) no-repeat ` }}
      >
        <div className="overlay">
          {/* navbar component render  */}
          <Navbar />
          {/* content Component  */}
          <div className="header-content">
            <p>
              Explore the authentic vegan dishes with your friends and family
            </p>
            {/* global component btn  */}
            <SectionButton content="Read more" href="" />
          </div>
          
        </div>
      </header>
    );
  }
}
