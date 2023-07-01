'use client'
import AboutUs from '@/Components/aboutus/AboutUs'
import Special from '@/Components/special/Special'
import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <>
        <AboutUs></AboutUs>
        <Special></Special>
      </>
    )
  }
}
