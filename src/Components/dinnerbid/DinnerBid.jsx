import React, { Component } from "react";
import Container from "../global/container/Container";
import { VEGAN_INFO } from "@/Mock/info";
import Image from "next/image";
import Content from "./Content";
import './dinnerbid.css'

export default class DinnerBid extends Component {
  render() {
    return (
      <section className="dinner-bid-sec">
        <Container variant="md">
          <div className="content-container">
            <Image src={VEGAN_INFO["dinner-bid"].img} alt="" width={519} height={422}/>
            <Content></Content>
            <Image src={VEGAN_INFO["dinner-bid"].img} alt="" width={519} height={422}/>
          </div>
        </Container>
      </section>
    );
  }
}
