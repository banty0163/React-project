
import './App.css'
 import TaskTodo from './components/TaskTodo'
 import Todo from './components/Todo'
function App() {
                                                                       

  return (
    <div className='bg-gray-800 flex flex-col  mx-auto w-full h-auto items-center gap-5  '>
        <h1 className='text-5xl font-sans text-amber-50 font-extrabold mt-9' >Todo APP using Redux</h1>
        <div className='mt-5'>
          <Todo/>
        </div>
      <div className='mt-6'>
          <TaskTodo/>
      </div>
     </div>
  )
}

export default App
