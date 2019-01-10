import React, { Component } from 'react'

class Header extends Component {
  search = event => {
    console.log('search')
  }
  render() {
    return (
      <div>
        <div className="navBar">
          <a href="#">Home</a>
          <a href="#">Browse</a>
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
