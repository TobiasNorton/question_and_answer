import React, { Component } from 'react'
import history from './history'
import { Link } from 'react-router-dom'
import axios from 'axios'

class NavBar extends Component {
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
    // const formData = new FormData(userInput)
    // for (let pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1])
    // }
    axios.get(`/api/search/${this.state.userInput}`).then(response => {
      window.location = `/questions/search/${this.state.userInput}`
    })
  }

  render() {
    return (
      <div>
        <div className="navBar">
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            Q & A
          </Link>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            Home
          </Link>
          <Link to="/questions" style={{ color: 'white', textDecoration: 'none' }}>
            Browse
          </Link>
          <form className="nav-search" onSubmit={this.search}>
            <input
              placeholder="Search by keyword"
              type="text"
              onChange={this.addUserInput}
              autoComplete="off"
              name="keyword"
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default NavBar
