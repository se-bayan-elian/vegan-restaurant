import { VEGAN_INFO } from '@/Mock/info'
import Image from 'next/image'
import React, { Component } from 'react'
import Links from './socialmedia/Links'
import './left.css'
export default class LeftItem extends Component {
  render() {
    return (
      <div className='left-item'>
        <div className="brand">
          <Image src={VEGAN_INFO.contactUs.logo} alt="Golden View Dine " 
          width={79} height={76}
          />
          <h1>Golden View Dine </h1>
        </div>
        <div className="content">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin 
        </p>
        <Links></Links>
        </div>
      </div>
    )
  }
}
