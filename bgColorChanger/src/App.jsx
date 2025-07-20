import { useState } from 'react'
import './style.css'

function App() {

    const [color , setColor]=useState('gray');

    const changeColor = function(){
         setColor(color)
    }

  return (
    <>
       <div style={{backgroundColor:color} } 
       
       className='h-screen  p-6 content-end  flex items-center flex-col'>

           <h1 className='text-4xl p-6'>background Color Changer</h1>

         <div className='flex p-5 gap-5'>
            <button className='bg-white  py-2 px-6 rounded-3xl text-center font-bold text-2xl' style={{color:'green'}}
        onClick={()=>setColor('green')}
         >Green</button>

         <button className='bg-white   py-2 px-6 rounded-3xl text-center font-bold text-2xl' style={{color:'olive'}}
        onClick={()=>setColor('olive')}
         >olive</button>


         <button className='bg-white   py-2 px-6 rounded-3xl text-center font-bold text-2xl' style={{color:'yellow'}}
        onClick={()=>setColor('yellow')}
         >yellow</button>


         <button className='bg-white   py-2 px-6 rounded-3xl text-center font-bold text-2xl' style={{color:'brown'}}
        onClick={()=>setColor('brown')}
         >Green</button>

         </div>
       
       


    
       </div>
    </>
  )
}

export default App