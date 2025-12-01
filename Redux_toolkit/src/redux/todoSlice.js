import { createSlice,nanoid } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:"todo",
    initialState:{
        todos:[{id:1,text:"hello"}]
    },
    reducers:{
        add:( state,action)=>{
            const newtodo={
                id:nanoid(4),
                text:action.payload
            }
            state.todos.push(newtodo)
        },
        update:(state,action)=>{
            console.log(action)
            const newarray=state.todos.map((obj)=>obj.id==action.payload.id?{id:obj.id,text:action.payload.editText}:obj)
            state.todos=newarray
        },
        remove:(state,action)=>{
           const newarray=state.todos.filter((obj)=>obj.id!=action.payload)
            state.todos=newarray
        }
    },
})

export const {add,update,remove}=todoSlice.actions
export default todoSlice.reducer

