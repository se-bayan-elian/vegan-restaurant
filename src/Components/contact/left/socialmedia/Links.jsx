import { VEGAN_INFO } from '@/Mock/info'
import React, { Component } from 'react'
import SocialLink from './SocialLink'
import './links.css'
export default class Links extends Component {
  render() {
    return (
      <ul className='social-links'>
        {VEGAN_INFO.contactUs.socialMedia.map(link =>(
          <SocialLink link={link.url} name={link.name} icon={link.icon} key={link.id}/>
        ))}
      </ul>
    )
  }
}
