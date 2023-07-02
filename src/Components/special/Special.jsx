import React, { Component } from 'react'
import SecHeader from '../global/secheader/SecHeader'
import { VEGAN_INFO } from '@/Mock/info'
import Container from '../global/container/Container'
import Privilge from './Privilge'
import './special.css'
export default class Special extends Component {
  render() {
    return (
      <section className='special-sec' id='Special'>
        <SecHeader desc={VEGAN_INFO.special.title} title='Special' variant='center'/>
        <div className="privilges-boxes">
          <Container variant='lg'>
            <div className="boxes-container">
            {VEGAN_INFO.special.boxes.map((box)=> <Privilge key={box.title} img={box.img} title={box.title} desc={box.desription}/>)}

            </div>
          </Container>
        </div>
      </section>
    )
  }
}
