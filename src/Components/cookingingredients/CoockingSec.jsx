import React, { Component } from "react";
import Container from "../global/container/Container";
import Content from "./Content";
import Image from "next/image";
import { VEGAN_INFO } from "@/Mock/info";
import './cookingSec.css'
export default class CookingSec extends Component {
  render() {
    return (
      <section className="cooking-ingredients">
        <Container variant="md">
          <div className="inner-container">
            <Content></Content>
          <div className="img">
            <Image src={VEGAN_INFO.cookingiIngredients.img }alt='' width={441} height={390}></Image>
          </div>
          </div>
        </Container>
      </section>
    );
  }
}
