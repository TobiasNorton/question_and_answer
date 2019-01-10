import React, { Component } from 'react'
import axios from 'axios'
import Question from './Question'

class Browse extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: []
    }
  }

  componentDidMount = () => {
    axios.get('/api/questions').then(response => {
      this.setState(
        {
          questions: response.data.questions
        },
        () => console.log(response.data)
      )
    })
  }

  render() {
    return (
      <div className="browse">
        {this.state.questions.map((question, index) => {
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
