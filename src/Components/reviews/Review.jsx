import Image from 'next/image'
import React, { Component } from 'react'

export default class Review extends Component {
  state={
    rank :[1,2,3,4,5]
  }
  render() {
    return (
      <div className={`review-card ${this.props.className}`} >
        <div className="card-header">
          <Image src={this.props.profile} alt={this.props.name} width={104} height={98.327}></Image>
          <div className="right">
            <h3>
            {this.props.name}
            </h3>
            <ul className="rank">
              {
                this.state.rank.map((el) =>(
                  <li key={el}>
                   {( el<= this.props.rank) ? 
                   // filled star
                   <svg width={'12px'} fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21.5,9.757l-5.278,4.354L17.871,21.5,12,17.278,6.129,21.5l1.649-7.389L2.5,9.757l6.333-.924L12,2.5l3.167,6.333Z"></path></g></svg>
                   : 
                   // outline star
                   <svg width={'12px'}  viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M14.349 8.515L12.5 5L10.651 8.515C10.5204 8.77186 10.3313 8.99449 10.099 9.165C9.86556 9.33638 9.59543 9.45107 9.31 9.5L5.5 10.247L8.16 13.428C8.52377 13.8267 8.69542 14.3643 8.63 14.9L8.124 19L11.632 17.3C11.9026 17.1689 12.1993 17.1006 12.5 17.1C12.7821 17.1009 13.0599 17.1694 13.31 17.3L16.9 18.895L16.394 14.844C16.33 14.3095 16.502 13.7736 16.865 13.376L19.5 10.247L15.69 9.5C15.4042 9.45122 15.1337 9.33652 14.9 9.165C14.6681 8.99438 14.4793 8.77175 14.349 8.515Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>}
                  </li>
                ) )
              }
            </ul>
          </div>
        </div>
        <p className="card-description">
          {this.props.review}
        </p>
      </div>
    )
  }
}
