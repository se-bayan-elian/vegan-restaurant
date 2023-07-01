import React, { Component } from "react";
import Container from "../global/container/Container";
import { VEGAN_INFO } from "@/Mock/info";
import "./stats.css";
import StatsElement from "./StatsElement";
export default class Statistics extends Component {
  render() {
    return (
      <section className="stats-sec">
        <Container variant="sm">
          <div className="stats-inner">
            {VEGAN_INFO.statstics.map((stats) => (
              <StatsElement
                key={stats.id}
                name={stats.label}
                number={stats.count}
                img={stats.img}
            ></StatsElement>))}
          </div>
        </Container>
      </section>
    );
  }
}
