import { VEGAN_INFO } from '@/Mock/info'
import React, { Component } from 'react'
import Food from '../food/Food'
import './foods.css'
import Link from 'next/link'
export default class Foods extends Component {
  render() {
    return (
      <div className='Foods'>
        {VEGAN_INFO.straightFromKitchen.foods.map(food =>(
          <Link href={'!#'} key={food.id} style={
            {display : 'inline-block'}
          }>
            <Food key={food.id} img={food.img} title={food.title} desc={food.description} price={food.price}/>
          </Link>
        ))}
      </div>
    )
  }
}
