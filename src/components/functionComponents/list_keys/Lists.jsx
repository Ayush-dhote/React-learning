import React from 'react'

const Lists = () => {

  const items = ['Item 1', 'Item 2', 'Item 3'];

//  const result = items.map((val)=>{

//     return <li >{val}</li>
//   })

  return (
    <div>
        {/* {result} */}

        {items.map((val, index)=>{
            return <li key={index}>{val}</li>
        })}
    </div>
  )
}

export default Lists