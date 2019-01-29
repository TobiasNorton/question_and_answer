import React, { Component } from 'react'
import Question from './Question'
import axios from 'axios'
import NewQuestion from './NewQuestion'

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
        allQuestions: response.data.questions
      })
    })
  }

  render() {
    return (
      <div>
        <h3 className="header-caption">Have a question? The world has answers.</h3>
        <h3>Ask anything.</h3>
        <NewQuestion reloadQuestions={this.reloadQuestions} />
        {this.state.allQuestions.map((question, index) => {
          return (
            <div key={index}>
              <Question id={question.id} header={question.header} body={question.body} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default Home
