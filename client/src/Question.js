import React, { Component } from 'react'
import Answer from './Answer'

class Question extends Component {
  render() {
    return (
      <div className="question">
        <h3 onClick={this.props.selectQuestion}>{this.props.header}</h3>
        <p>{this.props.body}</p>
        <div className="line" />
      </div>
    )
  }
}

export default Question
