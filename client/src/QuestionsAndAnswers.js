import React, { Component } from 'react'
import Answer from './Answer'

class QuestionsAndAnswers extends Component {
  render() {
    return (
      <div className="q_and_a">
        <div className="question">
          <h3>{this.props.chosenQuestion.header}</h3>
          <p>{this.props.chosenQuestion.body}</p>
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

export default QuestionsAndAnswers
