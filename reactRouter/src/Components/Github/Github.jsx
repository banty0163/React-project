import React, { useEffect, useState } from 'react'

function Github() {
  const [data,setData]= useState({})
  const [username,setUsername]= useState('');
  function getUserName(e){
    setUsername(e.target.value)
    
  }
  function fetchUserData (){
         fetch(`https://api.github.com/users/${username}`)
.then((resp)=>resp.json())
.then((resp)=>setData(resp))
console.log(data);
   
  }
    
  return (
    <div className='max-w-lvh mx-auto p-10 h-auto bg-gray-100 rounded-lg shadow-lg'> {/* edited: added Tailwind CSS for background, rounded corners, shadow */}
      {/* Check if data exists */}
      {data ? (
        <div className='flex flex-col items-center gap-6'>
          <div className='flex items-center gap-3 w-full'>
            <label htmlFor="username" className='text-lg font-bold'>Enter Username</label>
            <input type="text" onChange={getUserName} value={username}
              className='flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300' />
            <button onClick={fetchUserData} className='px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition'>Find</button>
          </div>
          {/* edited: added Tailwind CSS grid/table for data display below */}
          <div className='w-full bg-white rounded-lg shadow p-4 mt-4'>
            <div className='grid grid-cols-2 gap-4 items-center'>
              <div className='col-span-2 flex justify-center text-center'>
                <img src={data.avatar_url} alt="" className='w-24 h-24 rounded-full border-2 border-blue-500' />
              </div>
              <div className='font-bold text-gray-700'>Username:</div>
              <div className='text-gray-900'>{data.login}</div>
              <div className='font-bold text-gray-700'>Id:</div>
              <div className='text-gray-900'>{data.id}</div>
              <div className='font-bold text-gray-700'>Name:</div>
              <div className='text-gray-900'>{data.name || 'N/A'}</div>
              <div className='font-bold text-gray-700'>Followers:</div>
              <div className='text-gray-900'>{data.followers}</div>
              <div className='font-bold text-gray-700'>Following:</div>
              <div className='text-gray-900'>{data.following}</div>
              <div className='font-bold text-gray-700'>Public Repos:</div>
              <div className='text-gray-900'>{data.public_repos}</div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </div>

   
)
}




export default Github