import React, { Component } from 'react'

class Answer extends Component {
  render() {
    return (
      <div className="comment">
        <div className="line" />
        <p>{this.props.body}</p>
        <div className="vote">
          <button onClick={this.addRatingToAnswer}>up vote</button>
          <h4>{this.props.rating}</h4>
          <button onClick={this.subtractRatingFromAnswer}>down vote</button>
        </div>
      </div>
    )
  }
}

export default Answer
