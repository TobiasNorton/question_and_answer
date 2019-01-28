import React, { Component } from 'react'
import Answer from './Answer'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Question extends Component {
  render() {
    return (
      <div className="question">
        <Link to={`/questions/${this.props.id}`}>
          <h3 value={this.props.key}>{this.props.header}</h3>
        </Link>
        <p>{this.props.body}</p>
        <div className="line" />
      </div>
    )
  }
}

export default Question
