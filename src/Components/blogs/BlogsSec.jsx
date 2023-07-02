import React, { Component } from "react";
import Container from "../global/container/Container";
import SecHeader from "../global/secheader/SecHeader";
import { VEGAN_INFO } from "@/Mock/info";
import Blog from "./Blog";
import './blogs.css'
export default class BlogsSec extends Component {
  render() {
    return (
      <section className="blogs-sec" id='Blogs'>
        <Container variant="lg">
          <SecHeader title="Blogs" desc={VEGAN_INFO.blogs.title } variant='center'></SecHeader>
          <div className="blogs-cards">
            {VEGAN_INFO.blogs.elements.map((blog) => (
              <Blog
                key={blog.id}
                title={blog.name}
                desc={blog.desscription}
                img={blog.img}
              ></Blog>
            ))}
          </div>
        </Container>
      </section>
    );
  }
}
