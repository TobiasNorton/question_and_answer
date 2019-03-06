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
    //If there is user input, perform a search
    if (this.props.match.params.input) {
      axios.get(`/api/search/${this.props.match.params.input}`).then(response => {
        this.setState({
          questions: response.data.questions
        })
      })
    } else {
      //If there is no user input, return all questions
      axios.get('/api/questions/').then(response => {
        this.setState({
          questions: response.data.questions
        })
      })
    }
  }

  render() {
    return (
      <div className="browse">
        <div className="browse-questions-container">
          <p className="browse-header">Browse Top Questions</p>
          {this.state.questions.map((question, index) => {
            return (
              <div key={index}>
                <Question
                  question={question}
                  changeStateOfQuestionID={this.props.changeStateOfQuestionID}
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Browse
