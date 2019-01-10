import React, { Component } from 'react'
import Question from './Question'
import QuestionAndAnswer from './QuestionAndAnswer'
import Home from './Home'

class App extends Component {
  render() {
    return (
      <>
        <h1>Q & A</h1>
        {/* <Home /> */}
        <QuestionAndAnswer />
      </>
    )
  }
}

export default App
