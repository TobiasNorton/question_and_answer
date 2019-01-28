import React, { Component } from 'react'
import Question from './Question'
import axios from 'axios'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      allQuestions: []
    }
  }

  componentDidMount = () => {
    axios.get('/api/questions').then(response => {
      this.setState({
        allQuestions: response.data.questions
      })
    })
  }

  render() {
    return (
      <div>
        <h3 className="header-caption">Have a question? The world has answers.</h3>
        <h3>Ask anything.</h3>
        <form>
          <input type="text" placeholder="How do I divide the letter Q by 4?" />
          <button type="submit">Submit</button>
        </form>
        {this.state.allQuestions.map(question => {
          return (
            <>
              <Question
                key={question.id}
                id={question.id}
                header={question.header}
                body={question.body}
              />
            </>
          )
        })}

        {/* <div className="line" />
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
        <Question /> */}
      </div>
    )
  }
}

export default Home
