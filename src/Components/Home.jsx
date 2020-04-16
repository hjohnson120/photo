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
            {' '}
            HEY new friend! I'm Bri, owner and sole photographer of Asher + Rose
            Photography. I am SO excited that you're here! I'm just a fun lovin'
            coffee obsessed momma of three who took a chance with her camera and
            ended up ABSOLUTELY LOVING IT! I'm a full service photographer who
            serves the Greater Tampa Bay area. I am a natural light photographer
            who LOVES the outdoors, exploring new locations and capturing the
            true beauty of both clients and their surroundings. With a very
            minimalistic style of editing, I like to call my editing style
            bright and moody. I love the bright sun flares and also love my
            images to have a bit of a moody feel. Using goofy props and "not so
            funny" jokes I'm able to capture those real raw reactions out of my
            clients. So come prepared to laugh and have a good time at your
            session. My favorite part of what I do is the prep of it all.
            Talking with you prior to the session, making Pinterest boards,
            grabbing coffee and just really making sure that your session is
            EVERYTHING you imagined and more. I would love to talk with you
            about your vision and how I can make your fairytale come true! Since
            we are now new friends, feel free to
            <a className="mailTo" href="mailto:asher.rosephoto@gmail.com">
              email
            </a>{' '}
            me anytime! (Photography related or not)
          </p>
        </div>
        <div className="homePhotos">
          <div className="flexPhoto">
            <img className="photoOne" alt="Newborn portrait" src={couple} />
            <div className="photoInfo">
              <h1> Portraits</h1>
              <h1> Headshots</h1>
              <h1> Seniors</h1>
              <h1> Cap & Gown</h1>
            </div>
          </div>
          <div className="flexPhoto2">
            <div className="photoInfo">
              <h1> Newborn</h1>
              <h1> Fresh 48</h1>
              <h1> Birth</h1>
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
              <h1> Cake Smash</h1>
              <h1> Families</h1>
              <h1> Milestones</h1>
            </div>
          </div>
          <div className="flexPhoto2">
            <div className="photoInfo">
              <h1> Elopements</h1>
              <h1> Weddings</h1>
              <h1> Engagements</h1>
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
            <p>
              <faFacebook icon="facebook" />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
