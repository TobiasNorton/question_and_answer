import React, { Component } from 'react'
import Question from './Question'
import QuestionsAndAnswers from './QuestionsAndAnswers'
import Home from './Home'
import Header from './Header'
import Browse from './Browse'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: [],
      question_id: undefined,
      chosenQuestion: {}
    }
  }

  componentDidMount = () => {
    axios.get('/api/questions').then(response => {
      this.setState(
        {
          questions: response.data.questions
        },
        () => console.log(response.data)
      )
    })
  }
  addRatingToAnswer = () => {
    // axios call to add to rating
  }
  subtractRatingFromAnswer = () => {
    // axios call to remove to rating
  }

  selectQuestion = () => {
    // use question_id to do a axios call to get the single
    // question from api
    // then setstate to the question
  }

  render() {
    return (
      <>
        <Header />
        {/* <Home /> */}
        <QuestionsAndAnswers
          questions={this.state.questions}
          chosenQuestion={this.state.chosenQuestion}
          addRatingToAnswer={this.addRatingToAnswer}
          subtractRatingFromAnswer={this.subtractRatingFromAnswer}
        />
        <Browse questions={this.state.questions} question_id={this.state.question_id} />
      </>
    )
  }
}

export default App
