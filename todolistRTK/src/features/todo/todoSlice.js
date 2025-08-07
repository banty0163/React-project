import {createSlice,nanoid} from '@reduxjs/toolkit'
// createSlice is used for create the reducer and the action creators 
// And nanoid is used for create  a unique id 
const initialState ={
    todos:[{id:1,text:"hello banty"}]
    // initialState is just a name that means we store out initial state in this object like our task or any think we want 
}
export const todoSlice = createSlice({
     name:'todo',
     initialState,
     reducers:{
        addTodo:(state,action)=>{
                const todo = {
                     id:nanoid(),
                     text:action.payload
                }
                state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
        state.todos = state.todos.filter((todo)=>todo.id !==  action.payload)
        },
        updateTodo:(state,action)=>{
            const {id,text} = action.payload
           state.todos.find((todo)=>todo.id == id ? todo.text = text : null)
        }
     }
})

export const {addTodo,removeTodo,updateTodo} = todoSlice.actions

export default todoSlice.reducer