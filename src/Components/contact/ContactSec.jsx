'use client'
import React, { Component } from "react";
import Container from "../global/container/Container";
import LeftItem from "./left/LeftItem";
import MiddleItem from "./middle/MiddleItem";
import RightItem from "./right/RightItem";
import './contact.css'
export default class ContactSec extends Component {
  render() {
    return (
      <section className="contact-us">
        <Container variant="md">
          <div className="contact-inner">
            <LeftItem></LeftItem>
            <MiddleItem></MiddleItem>
            <RightItem></RightItem>
          </div>
        </Container>
      </section>
    );
  }
}
