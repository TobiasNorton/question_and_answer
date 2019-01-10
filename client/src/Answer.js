import React, { Component } from 'react'

class Answer extends Component {
  addToRating = () => {
    // axios call to add to rating
  }
  subtractFromRating = () => {
    // axios call to remove to rating
  }

  render() {
    return (
      <div className="comment">
        <div className="line" />
        <p>
          ...Are you serious? my stove and I've been rubbing it vigorously with a pair of sticks to
          get the friction going. Is there an easier way?
        </p>
        <div className="vote">
          <button onClick={this.addToRating}>up vote</button>
          <h4>45</h4>
          <button onClick={this.subtractFromRating}>down vote</button>
        </div>
      </div>
    )
  }
}

export default Answer
