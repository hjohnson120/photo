import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Sessions from './Components/Sessions'
import Home from './Components/Home'

export default function AppRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/sessions" component={Sessions} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  )
}
