import React, { Component } from 'react'
import Question from './Question'

class Browse extends Component {
  render() {
    return (
      <div className="browse">
        {this.props.questions.map((question, index) => {
          return <Question key={index} header={question.header} body={question.body} />
        })}
      </div>
    )
  }
}

// Display all questions in the database
// 1. Fill state with all the questions
// 2. Map every item in state and return each item
// 3. We need to make sure they show up in the right place

export default Browse
