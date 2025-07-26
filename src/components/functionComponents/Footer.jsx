import React from 'react'

const Footer = (props) => {

  return (
    <div style={{position: "absolute", bottom: "0", width: "100vw", height: "50px", backgroundColor: '#aaaaaaff'}}>
    <h1>{props.value}</h1>
    </div>
  )
}

export default Footer