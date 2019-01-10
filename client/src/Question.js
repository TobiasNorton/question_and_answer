import React, { Component } from 'react'
import Answer from './Answer'

class Question extends Component {
  clickHandle = event => {
    console.log(event.target.value)
    // this.props.changeStateOfQuestionID(event.target.value)
  }

  render() {
    return (
      <div className="question">
        <h3 value={this.props.value} onClick={this.clickHandle}>
          {this.props.header}
        </h3>
        <p>{this.props.body}</p>
        <div className="line" />
      </div>
    )
  }
}

export default Question
