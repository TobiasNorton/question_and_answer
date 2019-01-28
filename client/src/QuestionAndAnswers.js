import React, { Component } from 'react'
import Answer from './Answer'
import axios from 'axios'
import Question from './Question'

class QuestionAndAnswers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questionAndItsAnswers: {
        answers: []
      }
    }
  }

  componentDidMount = () => {
    axios.get(`/api/questions/${this.props.match.params.id}`).then(response => {
      this.setState({
        questionAndItsAnswers: response.data.question
      })
    })
  }

  render() {
    return (
      <div className="q_and_a">
        {/* //   <div className="question">
      //     <div className="line" />
      //   </div> */}

        <Question
          id={this.state.questionAndItsAnswers.id}
          header={this.state.questionAndItsAnswers.header}
          body={this.state.questionAndItsAnswers.body}
        />
        <h3>Answers</h3>
        {this.state.questionAndItsAnswers.answers.map(answer => {
          return <Answer key={answer.id} body={answer.body} rating={answer.rating} />
        })}
      </div>
    )
  }
}

export default QuestionAndAnswers
