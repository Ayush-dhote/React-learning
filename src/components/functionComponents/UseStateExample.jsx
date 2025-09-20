// import { useState } from "react"
import React from 'react'

const UseStateExample = () => {

  // const [name, setName] = useState("")

  // const getname = (event) => {
  //   setName(event.target.value)
  // }

  // const [list, setList] = useState([0])

  // const getList = (event) => {
  //   setList([...list, event.target.value])
  // }

  const data = ["ayush", "sachin", "priyanshu", "sahil", "saurabh"]

  // const mapedValues = data.map((value, index) => {
  //   return <h1 key={index}>{value}</h1>
  // })
  // console.log(mapedValues)

  return (
    <div>

      {/* <Header value={header} lastname={sidebar}/>
      <Sidebar value={sidebar}/>
      <Footer value={footer}/> */}

      {data.map((value, index) => {
        return <h1 key={index}>{value}</h1> 
      })}

      {/* <h1>{list}</h1>
      <button onClick={getList}>add</button> */}

    </div>
  )
}

export default UseStateExample