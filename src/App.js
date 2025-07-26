import React from 'react'
// import Header from './components/classComponents/Headerader'
// import Footer from './components/classComponents/Footer'
// import Sidebar from './components/classComponents/Sidebar'

import Header from './components/functionComponents/Header'
import Footer from './components/functionComponents/Footer'
import Sidebar from './components/functionComponents/Sidebar'

const App = () => {
  let header = "Header";
  let footer = "Footer";
  let sidebar = "Sidebar";


  return (
    <div>
      {/* <Header />    
      <Sidebar />
      <Footer />   */}

      <Header value={header} lastname={sidebar}/>
      <Sidebar value={sidebar}/>
      <Footer value={footer}/>

    </div>
  )
}

export default App