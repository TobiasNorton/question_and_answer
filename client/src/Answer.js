import React, { Component } from 'react'

class Answer extends Component {
  render() {
    return (
      <div className="comment">
        <div className="line" />
        {/* {this.state.chosenQuestion.answers.map(answer => {
            return(
              <p>
              {answer.body}
            </p>
            <div className="vote">
              <button onClick={this.addToRating}>up vote</button>
              <h4>{answer.rating}</h4>
              <button onClick={this.subtractFromRating}>down vote</button>
            </div>
              
            )
          })} */}
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
