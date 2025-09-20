import React, {useState, useCallback} from 'react'
import UsecallbackChild from './UsecallbackChild'

const UseCallbackExample = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(()=> setCount(prev=> prev + 1),[]); 

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleClick}>increment</button>
 <br />
        <UsecallbackChild/>
    </div>
  )
}

export default UseCallbackExample