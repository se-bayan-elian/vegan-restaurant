import React, { Component } from "react";
import SecHeader from "../global/secheader/SecHeader";
import Container from "../global/container/Container";
import "./about.css";
import { VEGAN_INFO } from "@/Mock/info";
import SectionButton from "../global/secBtn/SectionButton";
import Image from "next/image";
export default class AboutUs extends Component {
  render() {
    return (
      <section className="about-sec" id="AboutUs">
        <Container variant="md">
          <div className="left">
            <SecHeader
              title="About Us"
              desc={VEGAN_INFO.aboutUs.title}
              variant="left"
            />
            <p>{VEGAN_INFO.aboutUs.description}</p>
            <SectionButton content="Read more" href="" />
          </div>
          <div className="right">
            <Image
              src={VEGAN_INFO.aboutUs.img}
              alt=""
              width={378}
              height={407}
            />
          </div>
        </Container>
      </section>
    );
  }
}
