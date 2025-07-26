import React from 'react'

const Header = (props) => {
    let name = props.value
    console.log(props)
    

  return (
    <div style={{ width: "100vw", height: "50px", backgroundColor: '#aaaaaaff'}}>
        <h1>{name}</h1>
    </div>
  )
}

export default Header