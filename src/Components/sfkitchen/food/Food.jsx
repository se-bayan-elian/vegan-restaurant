import Image from 'next/image'
import React, { Component } from 'react'
import './food.css'
export default class Food extends Component {
  render() {
    return (
      <div className='food'>
        <Image src={this.props.img} alt={this.props.title} width={64} height={64}/>
        <div className="food-info">
          <h1>{this.props.title}</h1>
          <p>{this.props.desc}</p>
        </div>
        <span className='expanded-line'></span>
        <span className='food-price'>{this.props.price}</span>
      </div>
    )
  }
}
