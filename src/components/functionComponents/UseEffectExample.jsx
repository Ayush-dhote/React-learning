import React, {useEffect, useState} from 'react'

const UseEffectExample = () => {

    const [count, setCount] = useState(0)
    const [value, setValue] = useState(0)

    useEffect(() => {

        console.log("useEffect called");

        // const timer = setInterval(() => {
        //     console.log("tick")
        // }, 1000)

    },[value])

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>

        <h1>{value}</h1>
        <button onClick={() => setValue(value + 1)}>Increment Value</button>
    </div>
  )
}

export default UseEffectExample