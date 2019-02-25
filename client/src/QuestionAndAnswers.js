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
    // axios.get(`/api/questions/${this.props.match.params.id}`).then(response => {
    //   this.setState(
    //     {
    //       questionAndItsAnswers: response.data.question
    //     },
    //     () => this.state.questionAndItsAnswers
    //   )
    // })
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

  //get id from state and pass to upvote
  //
  deleteQuestion = () => {
    axios.delete(`/api/questions/${this.props.id}`).then(response => {
      // this.props.loadAnswers()
    })
  }

  upvoteQuestion = () => {
    axios.put(`/api/questions/upvote/${this.props.id}`).then(response => {
      // this.props.loadAnswers()
    })
  }

  downvoteQuestion = () => {
    axios.put(`/api/questions/downvote/${this.props.id}`).then(response => {
      // this.props.loadAnswers()
    })
  }

  createAnswer = event => {
    event.preventDefault()
    let form = event.target
    let formData = new FormData(form)
    // for (let pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1])
    // }

    axios.post('/api/answers/new', formData).then(response => {
      // console.log(response.data)
      form.reset()
      this.loadAnswers()
    })
  }

  render() {
    return (
      <div className="q_and_a">
        <Question
          question={this.state.questionAndItsAnswers}
          loadQuestion={this.loadQuestion}
          bool={true}
        />
        <h3>Answers</h3>
        <form onSubmit={this.createAnswer}>
          <input type="hidden" name="answer[question_id]" value={this.props.match.params.id} />
          <textarea name="answer[body]" placeholder="Know the answer?" />
          <button type="submit">Submit</button>
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
    )
  }
}

export default QuestionAndAnswers
