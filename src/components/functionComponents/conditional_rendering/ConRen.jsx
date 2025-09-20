import React from 'react'
import Login from './Login'
import Logout from './Logout'
import { useState } from 'react'

const ConRen = () => {
  
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [isAdmin, setIsAdmin] = useState(true)

    // if(isLoggedIn){
    //     return <Logout />
    // }else{
    //     return <Login />
    // }

    // return (
    //     <div>
    //         {(isLoggedIn && isAdmin) ? <Logout /> : <Login />}
    //     </div>
    // )


    return (
        <div>
            <Login />
            {isLoggedIn  && <Logout /> && isAdmin}
        </div>
    )
}

export default ConRen