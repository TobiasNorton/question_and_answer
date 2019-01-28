import React, { Component } from 'react'
import Answer from './Answer'

class QuestionAndAnswers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questionAndItsAnswers: {
        answers: []
      }
    }
  }

  componentDidM

  render() {
    return (
      <div className="q_and_a">
        <div className="question">
          <div className="line" />
        </div>
        <h3>Answers</h3>
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </div>
    )
  }
}

export default QuestionAndAnswers
