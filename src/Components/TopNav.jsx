import React from 'react'
import '../App.css'

function TopNav() {
  return (
    <div className="nav">
      <div className="topNav">
        <a className="navBtn" href="/">
          HOME
        </a>
        <a className="navBtn" href="/sessions">
          SESSIONS
        </a>
        <a className="navBtn" href="html_images.asp">
          ABOUT
        </a>
        <a className="navBtn" href="html_images.asp">
          CONTACT
        </a>
        <a className="navBtn" href="html_images.asp">
          BLOG
        </a>
      </div>
    </div>
  )
}

export default TopNav
