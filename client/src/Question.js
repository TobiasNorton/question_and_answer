import React, { Component } from 'react'
import Answer from './Answer'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Question extends Component {
  showID = () => {
    console.log(this.props.id)
  }

  render() {
    const question = this.props.question
    console.log(question)
    return (
      <div className="question">
        <Link to={`/questions/${question.id}`}>
          <h3 onClick={this.showID} value={question.key}>
            {question.header}
          </h3>
        </Link>
        <p>{question.body}</p>
        <div className="line" />
      </div>
    )
  }
}

export default Question
