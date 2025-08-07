import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'
function Todo() {
     const [input,setInput] = useState('');
     const dispatch = useDispatch();
   
     const addTask = (e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
     }

  return (
      <div >
        
         <form onSubmit={addTask} className='flex gap-6 text-white rounded-t-2xl ' >
            <input type="text"  
              placeholder='Enter your Task...'
              value={input}
              onChange={(e)=>setInput(e.target.value)}
              className='p-4 outline-none text-center border- border w-md text-2xl rounded-bl-lg'
            />
            <button className= 'p-3 bg-blue-500 rounded-md w-[150px] text-[20px] hover:bg-blue-700' >Add task</button>
         </form>
     
      </div>
  )
}

export default Todo