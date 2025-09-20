import React, {useState, useEffect} from 'react'
import Header from './components/functionComponents/Header'
import Footer from './components/functionComponents/Footer'
import Sidebar from './components/functionComponents/Sidebar'
import UseStateExample from './components/functionComponents/UseStateExample'
import UseEffectExample from './components/functionComponents/UseEffectExample'
import UseMemoExample from './components/functionComponents/UseMemoExample'
import UseCallbackExample from './components/functionComponents/UseCallbackExample'
import ClassComponent from './components/classComponents/ClassComponent'
import FunctionCompEx from './components/functionComponents/FunctionCompEx'
import Parent from './components/functionComponents/card/Parent'
import ConRen from './components/functionComponents/conditional_rendering/ConRen'
import List from './components/functionComponents/list_keys/Lists'
import Fragments from "./components/functionComponents/react_fragments/FragmentsEx"
import FragentEx2 from "./components/functionComponents/react_fragments/FragmentsEx2"

const App = () => {

  // let example = "This is props example"
  // const [name, setName] = useState("aman")

  // let name = "ayush"

  // let setname = () =>{
  //   name = "vijay"
  //   console.log("name chaged to vijay")
  // }




  return (
    <div>

      {/* <FunctionCompEx name={name} update={setname} /> */}

      {/* <ClassComponent /> */}

      {/* <Header value={header} lastname={sidebar}/>
      <Sidebar value={sidebar}/>
      <Footer value={footer}/> */}

      {/* useState eample */}
      {/* <UseStateExample /> */}

      {/* useEffect example */}
      {/* <UseEffectExample /> */}

      {/* useMemo example */}
      {/* <UseMemoExample /> */}

      {/* useCallback example */}
      {/* <UseCallbackExample /> */}


      {/* <Parent /> */}

      {/* <ConRen /> */}

      <List />

      {/* <Fragments />
      <FragentEx2 /> */}
      
      
    
    </div>
  )
}

export default App