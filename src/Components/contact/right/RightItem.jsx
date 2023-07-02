import { VEGAN_INFO } from '@/Mock/info'
import Image from 'next/image'
import Link from 'next/link'
import React, { Component } from 'react'
import './right.css'
export default class RightItem extends Component {
  render() {
    return (
      <div className='right-item'>
        <h1>Contact Us</h1>
         <ul className="ways">
          {VEGAN_INFO.contactUs.contactInfo.map(way=>(
            <li key={way.id}>
              <Image src={way.icon} alt="" width={32} height={32}/>
              <Link href={way.url}>
                {way.value}
              </Link>
            </li>
          ))}
         </ul>
      </div>
    )
  }
}
