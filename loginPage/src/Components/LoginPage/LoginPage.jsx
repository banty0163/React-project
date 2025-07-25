import React, { useContext, useState } from 'react'
import UserContext from '../../context/UserContext'; 
function LoginPage() {
   const {setUser} = useContext(UserContext);
  const [username,setUsername]=useState('');
  const [password,setPassword] = useState('');

    const handleClick = (e)=>{
      e.preventDefault()
         setUser(
             {
                username,password
             }
         )
    }
  return (
    <div className='max-w-md border-1 p-6 gird h-auto place-content-center mx-auto h-3/12'>
      <div className='grid grid-cols-1 gap-4
'>  
         
      <h1 className='text-center text-3xl font-bold underline  '>User Login</h1>
       <label htmlFor="username" className='text-[20px] font-semibold'>Enter your username</label>
      <input type="text" placeholder='username'  onChange={(e)=>setUsername(e.target.value)} value={username}
      
      className='outline-none p-3 bg-gray-200'/>
      <label htmlFor="password" className='text-[20px] font-semibold'>Password</label>
      <input type="text" placeholder='password'  onChange={(e)=>setPassword(e.target.value)} value={password}
      className='outline-none p-3 bg-gray-200'
      />
      <button onClick={handleClick} 
      
        className="w-full px-4 py-2 mt-4 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
      >login</button>
      </div>

    </div>
  )
}

export default LoginPage