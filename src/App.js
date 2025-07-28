import React, {useState, useEffect} from 'react'
import Header from './components/functionComponents/Header'
import Footer from './components/functionComponents/Footer'
import Sidebar from './components/functionComponents/Sidebar'
import UseStateExample from './components/functionComponents/UseStateExample'
import UseEffectExample from './components/functionComponents/UseEffectExample'
import UseMemoExample from './components/functionComponents/UseMemoExample'

const App = () => {


  return (
    <div>

      {/* <Header value={header} lastname={sidebar}/>
      <Sidebar value={sidebar}/>
      <Footer value={footer}/> */}

      {/* useState eample */}
      {/* <UseStateExample /> */}

      {/* useEffect example */}
      {/* <UseEffectExample /> */}

      {/* useMemo example */}
      <UseMemoExample />


    </div>
  )
}

export default App