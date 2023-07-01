import React, { Component } from "react";
import Container from "../global/container/Container";
import SecHeader from "../global/secheader/SecHeader";
import { VEGAN_INFO } from "@/Mock/info";
import Foods from "./foods/Foods";
import'./sfkitchen.css'
export default class SFKitchen extends Component {
  render() {
    return (
      <section className="sfkitchen-sec" style={{padding : '49px 0px 111px'  }}>
        <Container variant="md">
          <SecHeader
            title="Straight From Kitchen"
            desc={VEGAN_INFO.straightFromKitchen.title}
            variant='center'
          ></SecHeader>
          {/* foods component render  */}
          <Foods></Foods>
        </Container>
      </section>
    );
  }
}
