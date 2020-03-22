import React, { Component } from 'react'

export default class Main extends Component {
  render() {
    return (
      <div>
        <p>Welcome to Main</p>
        {this.props.data}
      </div>
    )
  }
}
