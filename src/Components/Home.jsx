import React from 'react'
import '../App.css'
import Logo from './Logo.png'
import main from './main.jpg'
import photoOne from './vvv.jpg'
import photoTwo from './homephoto2.jpg'
import couple from './ff.jpg'

function Home() {
  return (
    <div>
      <div className="logo">
        <img className="logoPic " alt="Asher + Rose Photography" src={Logo} />
      </div>
      <img className="mainPhoto" alt="Portrait" src={main} />
      <div className="bottomLinks">
        <p className="aboutInfo">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero quos
          odit adipisci provident laudantium debitis aperiam minima, placeat
          tempore voluptatum error ab atque consectetur iusto voluptas velit ad
          excepturi aspernatur.
        </p>
        <div className="homePhotos">
          <div className="flexPhoto">
            <img className="photoOne" alt="Newborn portrait" src={couple} />
            <p className="photoInfo"> couple thingsss</p>
          </div>
          {/* <div className="flexPhoto">
            <img className="photoTwo" alt="Newborn portrait" src={photoTwo} />
            <p> Babyyyy</p>
          </div> */}
          <div className="flexPhoto">
            <p className="photoInfo"> Elopements yay</p>
            <img
              className="photoOne"
              alt="Sunset St.Petersburg, FL"
              src={photoOne}
            />
          </div>
        </div>
        <div className="contact">
          <div>
            <p>
              <a className="mailTo" href="mailto:asher.rosephoto@gmail.com">
                asher.rosephoto@gmail.com
              </a>
            </p>
            <p>(727) 417-2947</p>
            <p>Greater Tampa Bay Area, FL</p>
          </div>
          <div>
            <p>links things</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
