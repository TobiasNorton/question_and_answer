import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Question extends Component {
  deleteQuestion = () => {
    axios.delete(`/api/questions/${this.props.question.id}`).then(response => {
      window.location = '/'
    })
  }

  upvoteQuestion = () => {
    console.log(this.props.question.id)
    axios.put(`/api/questions/upvote/${this.props.question.id}`).then(response => {
      this.props.loadQuestion()
    })
  }

  downvoteQuestion = () => {
    axios.put(`/api/questions/downvote/${this.props.question.id}`).then(response => {
      this.props.loadQuestion()
    })
  }

  render() {
    return (
      <div className="question">
        <Link to={`/questions/${this.props.question.id}`} className="question-header">
          <h3 onClick={this.showID} value={this.props.question.key}>
            {this.props.question.header}
          </h3>

          <p>{this.props.question.body}</p>
          {this.props.bool ? (
            <div className="vote">
              <button onClick={this.upvoteQuestion} className="vote-button">
                Upvote
              </button>
              <h4>{this.props.question.rating}</h4>
              <button onClick={this.downvoteQuestion} className="vote-button">
                Downvote
              </button>
              <button onClick={this.deleteQuestion} className="delete">
                Delete This Question
              </button>
            </div>
          ) : null}

          <div className="line" />
        </Link>
      </div>
    )
  }
}

export default Question
