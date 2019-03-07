import React, { Component } from 'react'
import Question from './Question'
import axios from 'axios'
import NewQuestion from './NewQuestion'
import Header from './Header'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      allQuestions: []
    }
  }

  componentDidMount = () => {
    this.reloadQuestions()
  }

  reloadQuestions = () => {
    axios.get('/api/questions').then(response => {
      this.setState({
        allQuestions: response.data.questions.splice(0, 5)
      })
    })
  }

  render() {
    return (
      <div className="home">
        <Header />
        <div className="main-logo">
          <h1 className="q">Q</h1>
          <h1 className="and">&</h1>
          <h1 className="a">A</h1>
        </div>
        <h3 className="header-caption">Have a question? The world has answers.</h3>
        <h3 className="question-prompt">Ask anything.</h3>
        <NewQuestion reloadQuestions={this.reloadQuestions} />
        <section className="top-questions">
          <h3 className="top-questions-header">Top Questions</h3>
          <div className="home-questions">
            {this.state.allQuestions.map((question, index) => {
              return (
                <div key={index}>
                  <Question question={question} />
                </div>
              )
            })}
          </div>
        </section>
      </div>
    )
  }
}

export default Home
