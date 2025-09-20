import React from 'react'
import Child1 from './Child1'
import { useState } from 'react'
import Child3 from './Child3'

const Parent = () => {

    const [name, setName] = useState("")

  return (
    <div>
        <Child1 title="Child1" name={name} setName={setName} />
        <Child1 title="Child2"   name={name} setName={setName} />
        <Child3 title="Child3"   name={name} setName={setName} />
        <p>parent : {name}</p>
    </div>
  )
}

export default Parent
