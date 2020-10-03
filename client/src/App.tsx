import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from './pages/home'
import Commits from './pages/commits'

export default function App() {
  return (
    <div className="app">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/:user/:repo" component={Commits} />
      </Router>
    </div>
  )
}
