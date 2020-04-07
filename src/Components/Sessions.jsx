import React from 'react'
import '../App.css'
import couple from '../images/ff.jpg'

function Sessions() {
  return (
    <div className="mainContainer">
      <section className="sessionsMain">
        <div className="tester">
          <img className="tester" alt="Newborn portrait" src={couple} />
          <h1>The thing here</h1>
        </div>
        <div>
          <img className="tester" alt="Newborn portrait" src={couple} />
          <h1>The thing here</h1>
        </div>
        <div>
          <img className="tester" alt="Newborn portrait" src={couple} />
          <h1>The thing here</h1>
        </div>
        <div>
          <img className="tester" alt="Newborn portrait" src={couple} />
          <h1>The thing here</h1>
        </div>
      </section>
    </div>
  )
}

export default Sessions
