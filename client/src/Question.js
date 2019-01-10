import React, { Component } from 'react'
import Answer from './Answer'

class Question extends Component {
  render() {
    return (
      <div className="question">
        <h3>How do I boil water?</h3>
        <p>
          I have a gallon of water and I've poured it into a pot. It's on my stove and I've been
          rubbing it vigorously with a pair of sticks to get the friction going. Is there an easier
          way?
        </p>
      </div>
    )
  }
}

export default Question
