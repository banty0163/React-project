import React from 'react'

function Cards({name,friendName}) {
  
  return (
       <div className=' max-w-[400px] p-4 ' >
           <div className=" flex-4  bg-green-200 content-center md:flex-4 rounded-2xl " >
              <div className='p-3 rounded-2xl'>
                <img className='' src="pht.jpg" alt="" />
              </div>
              <div className='p-4  '>
                 <h1 className='text-3xl'>{name || friendName}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quo blanditiis atque, sed quia doloribus! Hic natus quas tempora magnam?</p>
              </div>
           </div>
      </div>
  )
}

export default Cards