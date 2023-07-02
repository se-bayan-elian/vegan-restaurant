import React, { Component } from 'react'
import SecHeader from '../global/secheader/SecHeader'
import { VEGAN_INFO } from '@/Mock/info'
import Review from './Review'
import './reviews.css'
export default class Reviews extends Component {
  state={
    activeReview : 2
  }
  render() {
    return (
      <section className='reviews-sec'>
        <SecHeader title='Reviews' variant='center' desc={VEGAN_INFO.reviews.title}></SecHeader>
        <div className="reviews-cards">
          {VEGAN_INFO.reviews.elements.map(review=>(
          <Review className={review.id == this.state.activeReview ? 'active' : review.id >
        this.state.activeReview ? 'left':'right'} key={review.id} name={review.name} rank={review.stars} review={review.review} profile={review.img}/>
        ))}
        </div>
      </section>
    )
  }
}
