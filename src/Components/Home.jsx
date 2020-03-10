import React from 'react'
import '../App.css'
import Logo from './Logo.png'
import portrait from './DSC_2273.jpg'

function Home() {
  return (
    <div>
      <div>
        <img className="logo" alt="Asher + Rose Photography" src={Logo} />
      </div>
      <div>
        <img className="mainPhoto" alt="Portrait" src={portrait} />
      </div>
      <div className="bottomLinks">
        <div className="contact">
          <p>asher.</p>
          <p>(727) 417-2947</p>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default Home
