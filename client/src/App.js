import React, { Component } from 'react'
import Question from './Question'
import QuestionAndAnswer from './QuestionAndAnswer'
import Home from './Home'
import Header from './Header'
import Browse from './Browse'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        {/* <Home /> */}
        {/* <QuestionAndAnswer /> */}
        <Browse />
      </>
    )
  }
}

export default App
