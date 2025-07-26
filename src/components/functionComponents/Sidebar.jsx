import React from 'react'
import List from '../classComponents/List' // Assuming List is still a class component

const Sidebar = (props) => {
    let name = props.value
  return (
    <div style={{ width: "200px", height: "100vh", backgroundColor: '#ccccccff'}}>
        <h1>{name}</h1>
        <List />
    </div>
  )
}

export default Sidebar