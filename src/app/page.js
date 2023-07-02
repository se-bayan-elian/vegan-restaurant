'use client'
import AboutUs from '@/Components/aboutus/AboutUs'
import BlogsSec from '@/Components/blogs/BlogsSec'
import ContactSec from '@/Components/contact/ContactSec'
import CookingSec from '@/Components/cookingingredients/CoockingSec'
import DinnerBid from '@/Components/dinnerbid/DinnerBid'
import Footer from '@/Components/footer/Footer'
import Reviews from '@/Components/reviews/Reviews'
import SFKitchen from '@/Components/sfkitchen/SFKitchen'
import Special from '@/Components/special/Special'
import Statistics from '@/Components/statistics/Statistics'
import SubscribeSec from '@/Components/subscribe/SubscribeSec'
import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <>
        <AboutUs></AboutUs>
        <Special></Special>
        <SFKitchen></SFKitchen>
        <DinnerBid></DinnerBid>
        <CookingSec></CookingSec>
        <Statistics></Statistics>
        <Reviews></Reviews>
        <BlogsSec></BlogsSec>
        
      </>
    )
  }
}
