import React from 'react'

const Child3 = (props) => {
  return (
    <div>
    
        <input title='props.title' type="text" label="Child1" placeholder='Enter name' onChange={(e) => 
        {
            props.setName(e.target.value)}
         }/>
        <p>{props.title} : {props.name}</p>

    </div>
  )
}

export default Child3