import React, { Component } from 'react'
import SecHeader from '../global/secheader/SecHeader'
import Container from '../global/container/Container'
import { VEGAN_INFO } from '@/Mock/info'
import SectionButton from '../global/secBtn/SectionButton'

export default class Content extends Component {
  render() {
    return (
      <div className='content'>
        <SecHeader title="Cooking ingredients" desc={VEGAN_INFO.cookingiIngredients.title}></SecHeader>
        <p>
          {VEGAN_INFO.cookingiIngredients.description}
        </p>
        <SectionButton content='Read more' href=''/>
      </div>
    )
  }
}
