
import {useSelector,useDispatch} from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'
function TaskTodo() {
    const todos =  useSelector(state => state.todos)
     const dispatch = useDispatch();
     
  return (
    <div className='bg-gray-300 w-4xl text-left p-7 text-[20px] text-black mb-7'>
        <div>
         <h1 className='text-center text-3xl  font-bold mb-2'>Tasks</h1>
         <h1 className='underline border mb-9'></h1>
       <div>
            {
             todos.map((todo)=>(
               <li key={todo.id} 
                className='bg-green-100 p-4 flex justify-between rounded-md mb-3 hover:bg-gray-400 hover:text-white m-3                
'
                   >
                       {todo.text}
         <button onClick={()=>dispatch(removeTodo(todo.id))}
          className="transition-transform duration-10 hover:scale-110 "
          > 
                
                 <img src="https://www.svgrepo.com/show/31676/delete-button.svg" alt="delete-task" 
 className='size-7 '            
/> 
               
               </button>
                   </li>
             ))
          }
       </div>

     </div>
    </div>
  )
}

export default TaskTodo