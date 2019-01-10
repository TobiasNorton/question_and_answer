import React, { Component } from 'react'
import Question from './Question'

class Home extends Component {
  render() {
    return (
      <div>
        <h3 className="header-caption">Have a question? The world has answers.</h3>
        <h3>Ask anything.</h3>
        <form>
          <input type="text" placeholder="How do I divide the letter Q by 4?" />
          <button type="submit">Submit</button>
        </form>
        <div className="line" />
        <Question />
        <div className="line" />
        <Question />
        <div className="line" />
        <Question />
        <div className="line" />
        <Question />
        <div className="line" />
        <Question />
        <div className="line" />
        <Question />
      </div>
    )
  }
}

export default Home
