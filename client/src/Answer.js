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
        <p>
          ...Are you serious? my stove and I've been rubbing it vigorously with a pair of sticks to
          get the friction going. Is there an easier way?
        </p>
        <div className="vote">
          <button onClick={this.addRatingToAnswer}>up vote</button>
          <h4>45</h4>
          <button onClick={this.subtractRatingFromAnswer}>down vote</button>
        </div>
      </div>
    )
  }
}

export default Answer
