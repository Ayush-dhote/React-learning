import React, { Component } from 'react'
import List from './List'

export default class Sidebar extends Component {

  render() {
    return (
      <div style={{ width: "200px", height: "100vh", backgroundColor: '#929292ff', position: 'fixed', left: 0 }}>
        <h1>Sidebar</h1>
        <List />
      </div>
    )
  }
}
