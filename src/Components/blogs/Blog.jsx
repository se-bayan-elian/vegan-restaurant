import Image from 'next/image'
import Link from 'next/link'
import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
    return (
      <div className='blog-card'>
        <div className="img">
          <Image alt='' src={this.props.img} height={298} width={410}></Image>
        </div>
        <div className="card-content">
          <h1>{this.props.title}</h1>
          <p>{this.props.desc}</p>
          <Link href=''>
            Read More
          </Link>
        </div>
      </div>
    )
  }
}
