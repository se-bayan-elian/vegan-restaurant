'use client'
import React, { Component } from "react";
import Container from "../global/container/Container";
import Image from "next/image";
import SectionButton from "../global/secBtn/SectionButton";
import './subscribe.css'
export default class SubscribeSec extends Component {
  render() {
    return (
      <section className="subscribe-sec">
        <Container variant="md">
          <div className="subscribe-inner">
            <div className="label">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="bytesize:mail">
                  <path
                    id="Vector"
                    d="M2 6L16 16L30 6M2 26H30V6H2V26Z"
                    stroke="#A08040"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
              <h1>Subscribe to our Newsletter</h1>
            </div>
            <form action="" className="form-subscribe">
              <input type="text" name='email-input' placeholder="Your Email id"/>
              <SectionButton content='Subscribe' href=''></SectionButton>
            </form>
          </div>
        </Container>
      </section>
    );
  }
}
