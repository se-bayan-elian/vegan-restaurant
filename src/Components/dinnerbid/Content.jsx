import { VEGAN_INFO } from "@/Mock/info";
import React, { Component } from "react";
import SectionButton from "../global/secBtn/SectionButton";
import { Dancing_Script } from "next/font/google";
const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default class Content extends Component {
  render() {
    return (
      <div className="content">
        <p className={dancingScript.className}>{VEGAN_INFO["dinner-bid"].title}</p>
        <h1 >
          {VEGAN_INFO["dinner-bid"].bidInfo}
        </h1>
        <SectionButton href="" content="Book Table"></SectionButton>
      </div>
    );
  }
}
