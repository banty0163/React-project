import React, { useContext } from 'react'
import UserContext from '../../context/UserContext'

function Userlogin() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div className='text-center mt-5 text-3xl  uppercase font-bold'>please login</div>

    return <div className='text-center mt-5 text-3xl   font-bold
    '>Welcome {user.username}</div>
}

export default Userlogin