import React, { Component } from 'react'
import SecHeader from '../global/secheader/SecHeader'

export default class Reserve extends Component {
  render() {
    return (
      <section className='reserve-sec'>
        <div className="reserve-inner">
          <SecHeader title='Reserve a seat ' desc='Book a table on time' variant='center'></SecHeader>
          
        </div>
      </section>
    )
  }
}
