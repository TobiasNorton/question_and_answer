import React, { Component } from 'react'
import Question from './Question'
import Answer from './Answer'

class QuestionAndAnswer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: [],
      answers: []
    }
  }

  render() {
    return (
      <div className="q_and_a">
        <Question />
        <h3>Answers</h3>
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </div>
    )
  }
}

export default QuestionAndAnswer
