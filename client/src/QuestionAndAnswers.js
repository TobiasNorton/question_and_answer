import React, { Component } from 'react'
import Answer from './Answer'
import axios from 'axios'
import Question from './Question'
import NavBar from './NavBar'

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
    this.loadAnswers()
  }

  loadAnswers = () => {
    axios.get(`/api/questions/${this.props.match.params.id}`).then(response => {
      this.setState({
        questionAndItsAnswers: response.data.question
      })
    })
  }

  loadQuestion = () => {
    axios.get(`/api/questions/${this.props.match.params.id}`).then(response => {
      this.setState({
        questionAndItsAnswers: response.data.question
      })
    })
  }

  createAnswer = event => {
    event.preventDefault()
    let form = event.target
    let formData = new FormData(form)

    axios.post('/api/answers/new', formData).then(response => {
      form.reset()
      this.loadAnswers()
    })
  }

  render() {
    return (
      <div className="question-and-answers">
        <NavBar />
        <div className="q_and_a">
          <Question
            question={this.state.questionAndItsAnswers}
            loadQuestion={this.loadQuestion}
            bool={true}
          />
          <h3>Answers</h3>
          <form onSubmit={this.createAnswer} className="answer-form">
            <input type="hidden" name="answer[question_id]" value={this.props.match.params.id} />
            <textarea name="answer[body]" placeholder="Know the answer?" />
            <button type="submit" className="submit">
              Submit
            </button>
          </form>
          {this.state.questionAndItsAnswers.answers.map(answer => {
            return (
              <Answer
                key={answer.id}
                id={answer.id}
                body={answer.body}
                loadAnswers={this.loadAnswers}
                rating={answer.rating}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default QuestionAndAnswers
