import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:"todo",
    initialState:{
        todos:[{id:1,text:"hello"}]
    },
    reducers:{
        add:( state,action)=>{
            const newtodo={
                id:2,
                text:action.payload
            }
            state.todos.push(newtodo)
        },
        update:()=>{
            console.log("hello")
        },
        remove:()=>{
            console.log("hello")

        }
    },
})

export const {add,update,remove}=todoSlice.actions
export default todoSlice.reducer

