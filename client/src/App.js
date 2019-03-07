import React, { Component } from 'react'
import Question from './Question'
import QuestionAndAnswers from './QuestionAndAnswers'
import Home from './Home'
import NavBar from './NavBar'
import Browse from './Browse'
import axios from 'axios'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/questions" component={Browse} />
          <Route exact path="/questions/:id" component={QuestionAndAnswers} />
          <Route exact path="/questions/search/:input" component={Browse} />
        </div>
      </Router>
    )
  }
}

export default App
