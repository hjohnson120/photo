import React from 'react'
import '../App.css'
import Logo from '../images/Logo.png'
import main from '../images/main.jpg'
import photoOne from '../images/vvv.jpg'
import portrait1 from '../images/portrait1.jpg'
import couple from '../images/ff.jpg'
import two from '../images/22.jpg'

function Home() {
  return (
    <div>
      <div className="logo">
        <img className="logoPic " alt="Asher + Rose Photography" src={Logo} />
      </div>
      <img className="mainPhoto" alt="Portrait" src={main} />
      <div className="bottomLinks">
        <div className="aboutInfo">
          <h1>Hello + Welcome!</h1>
          <p>
            HEY new friend! I am Bri, owner and sole photographer of Asher +
            Rose Photography, + I am SO excited that you're here! I am just a
            fun lovin' coffee obsessed momma of three who took a chance with her
            camera and ended up ABSOLUTELY LOVING IT! I am a full service
            photographer who serves the Tampa bay and surrounding areas. I am a
            natural light photographer who loves the outdoors and exploring new
            locations and capturing the true beauty of both the clients and
            their surroundings with a very minimalistic style of editing. I like
            to call my editing style bright and moody, as I love the bright sun
            flares but also love my images to have a bit of a moody flare. I
            love to use goofy prompts and not so funny jokes to get those real
            raw reactions out of my clients, so come prepared to laugh and have
            a good time at your session. My favorite part of what I do, is the
            prep of it all! Talking with my clients prior to the session, making
            Pinterest boards, grabbing coffee, and just really making sure that
            your session is EVERYTHING you imagined It would be I would love to
            talk with you about your vision + how I can make your fairytale come
            true! Since we are now new friends, feel free to email me anytime!
            photography related or not! Asher.rosephoto@gmail.com
          </p>
        </div>
        <div className="homePhotos">
          <div className="flexPhoto">
            <img className="photoOne" alt="Newborn portrait" src={couple} />
            <div className="photoInfo">
              <h1>HI</h1>
              <p> couple thingsss</p>
            </div>
          </div>
          <div className="flexPhoto">
            <div className="photoInfo">
              <h1>HI</h1>
              <p> couple thingsss</p>
            </div>
            <img
              className="photoOne"
              alt="Sunset St.Petersburg, FL"
              src={photoOne}
            />
          </div>
          <div className="flexPhoto">
            <img className="photoOne" alt="Portrait" src={portrait1} />
            <div className="photoInfo">
              <h1>HI</h1>
              <p> couple thingsss</p>
            </div>
          </div>
          <div className="flexPhoto">
            <div className="photoInfo">
              <h1>Hi</h1>
              <p> Elopements yay</p>
            </div>
            <img
              className="photoOne"
              alt="Sunset St.Petersburg, FL"
              src={two}
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
