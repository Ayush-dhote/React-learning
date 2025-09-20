import React, { useMemo } from 'react'
import { useState } from 'react'

const Memo = () => {    

  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(100);

  const increment = () => {
    setAdd(add + 1);    
    }

    const decrement = () => {   
        setSub(sub - 1);
    }

    const memoisedFunction = useMemo(() => {
        console.log("Memoised function called");
        return add*10
    },[add]);

    //  function multiply() {
    //     console.log("Multiply function called");
    //     return add * 10;
    // }
    
  return (
    <div>
        <h1>test funtion: {memoisedFunction}</h1>
        {/* <h1>{multiply()}</h1> */}
        <h1>{add}</h1>
        <button onClick={increment}>add</button>
        <br />
        <h1>{sub}</h1>
        <button onClick={decrement}>sub</button>
    </div>
  )
}

export default Memo