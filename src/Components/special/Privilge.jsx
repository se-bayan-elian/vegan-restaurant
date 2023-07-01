import Image from 'next/image'
import React, { Component } from 'react'
import './privilge.css'
export default class Privilge extends Component {
  render() {
    return (
      <div className='privilige-box'>
        <Image src={this.props.img} alt=""  width={80} height={80}/>
        <h1>{this.props.title}</h1>
        <p>{this.props.desc}</p>
      </div>
    )
  }
}
