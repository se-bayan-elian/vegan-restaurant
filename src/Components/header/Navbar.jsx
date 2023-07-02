"use client";
import { VEGAN_INFO } from "@/Mock/info";
import Link from "next/link";
import React, { Component, useState } from "react";
import "./Navbar.css";
export default class Navbar extends Component {
  state = {
    navbarIsOpen: false,
  };
  render() {
    return (
      <div className="Navbar">
        <nav className={this.state.navbarIsOpen ? "active" : ""}>
          <div className="nav-header">
            <div className="logo">
              <img
                src={VEGAN_INFO.header.navbar.logo}
                alt="logo"
                title="logo"
              />
            </div>
            <div className="navbar-toggle">
              <button
                onClick={() =>
                  this.setState({ navbarIsOpen: !this.state.navbarIsOpen })
                }
              >
                {!this.state.navbarIsOpen ? (
                  // show 3 bars icon
                  <svg
                    viewBox="-2.24 -2.24 20.48 20.48"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#A08040"
                    stroke="#A08040"
                    strokeWidth="0.00016"
                    transform="rotate(0)"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="#CCCCCC"
                      strokeWidth="0.544"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14 5H2V3h12v2zm0 4H2V7h12v2zM2 13h12v-2H2v2z"
                      ></path>
                    </g>
                  </svg>
                ) : (
                  // show x mark icon to close navbar
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#A08040"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M4.70711 3.29289C4.31658 2.90237 3.68342 2.90237 3.29289 3.29289C2.90237 3.68342 2.90237 4.31658 3.29289 4.70711L10.5858 12L3.29289 19.2929C2.90237 19.6834 2.90237 20.3166 3.29289 20.7071C3.68342 21.0976 4.31658 21.0976 4.70711 20.7071L12 13.4142L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L13.4142 12L20.7071 4.70711C21.0976 4.31658 21.0976 3.68342 20.7071 3.29289C20.3166 2.90237 19.6834 2.90237 19.2929 3.29289L12 10.5858L4.70711 3.29289Z"
                        fill="#A08040"
                      ></path>{" "}
                    </g>
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`collapse ${this.state.navbarIsOpen && "collapse-open"}`}
          >
            <ul>
              {VEGAN_INFO.header.navbar.hyperlinks.map((hyperlink, index) => (
                <li key={hyperlink}>
                  <a
                    href={index > 0 ? "#" + hyperlink.split(" ").join("") : "/"}
                    target="_self"
                  >
                    {hyperlink}
                  </a>
                </li>
              ))}
              <li>
                <button>
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 20L15.514 15.506L20 20ZM18 9.5C18 11.7543 17.1045 13.9163 15.5104 15.5104C13.9163 17.1045 11.7543 18 9.5 18C7.24566 18 5.08365 17.1045 3.48959 15.5104C1.89553 13.9163 1 11.7543 1 9.5C1 7.24566 1.89553 5.08365 3.48959 3.48959C5.08365 1.89553 7.24566 1 9.5 1C11.7543 1 13.9163 1.89553 15.5104 3.48959C17.1045 5.08365 18 7.24566 18 9.5V9.5Z"
                      stroke="#A08040"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
          <div
            className={`book-btn ${this.state.navbarIsOpen && "book-btn-open"}`}
          >
            <Link href={"/reserve"}>Book Now</Link>
          </div>
        </nav>
      </div>
    );
  }
}
