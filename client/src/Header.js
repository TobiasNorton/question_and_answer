import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import axios from 'axios'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userInput: undefined
    }
  }

  addUserInput = event => {
    this.setState({
      userInput: event.target.value
    })
  }

  search = event => {
    event.preventDefault()
    console.log(this.state.userInput)
    // const formData = new FormData(userInput)
    // for (let pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1])
    // }
    axios.get('/api/search', { keyword: this.state.userInput }).then(response => {
      // history.push('/questions/:id')

      console.log(response.data)
    })
  }

  render() {
    return (
      <div>
        <div className="navBar">
          <Link to="/">Home</Link>
          <Link to="/questions" questions={this.props.questions}>
            Browse
          </Link>
          <form className="navBar" onSubmit={this.search}>
            <input
              placeholder="Search by keyword"
              type="text"
              onChange={this.addUserInput}
              name="keyword"
            />
          </form>
        </div>
        <div>
          <h1>Q & A</h1>
        </div>
      </div>
    )
  }
}

export default Header
