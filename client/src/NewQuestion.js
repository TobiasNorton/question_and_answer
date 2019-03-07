import React, { Component } from 'react'
import axios from 'axios'

class NewQuestion extends Component {
  createQuestion = event => {
    event.preventDefault()
    let form = event.target
    let formData = new FormData(form)
    for (let pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1])
    }

    axios.post('/api/questions/new', formData).then(response => {
      form.reset()
      this.props.reloadQuestions()
    })
  }

  render() {
    return (
      <form className="new-question-container" onSubmit={this.createQuestion}>
        <input
          type="text"
          placeholder="Title of your question"
          autoComplete="off"
          name="question[header]"
        />
        <textarea name="question[body]" placeholder="Explain in-depth here" />
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    )
  }
}

export default NewQuestion
