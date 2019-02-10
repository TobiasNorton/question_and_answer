import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import axios from 'axios'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  search = () => {
    axios.get('/api/questions/search').then(response => {})
  }

  render() {
    return (
      <div>
        <div className="navBar">
          <Link to="/">Home</Link>
          <Link to="/api/questions" questions={this.props.questions}>
            Browse
          </Link>
          <form className="navBar" onSubmit={this.search}>
            <input placeholder="Search questions here" />
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
