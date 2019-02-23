import React, { Component } from 'react'
import Question from './Question'
import axios from 'axios'

class Browse extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: []
    }
  }

  componentDidMount = () => {
    axios.get('/api/questions').then(response => {
      this.setState({
        questions: response.data.questions
      })
    })
  }

  render() {
    return (
      <div className="browse">
        {this.state.questions.map((question, index) => {
          return (
            <div key={index}>
              <Question
                value={question.id}
                header={question.header}
                body={question.body}
                changeStateOfQuestionID={this.props.changeStateOfQuestionID}
              />
            </div>
          )
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
