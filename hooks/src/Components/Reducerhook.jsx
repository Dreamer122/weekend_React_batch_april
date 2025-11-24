
import React, { useState ,useReducer} from 'react'

export const Reducerhook = () => {
    // const [data,setData]=useState(0)
    // const [text,setText]=useState("")
    const reducerfunction=(state,action)=>{
        // console.log(state,action)
        if(action.type=="INC"){
            return {
                ...state,
               counter:state.counter+1
            }
        }
        else if(action.type=="DEC"){
            return  {
                ...state,
               counter:state.counter-1
            }
        }
        else if(action.type=="INPUT"){
            return{
                ...state,
                text:action.payload
            }
        }
        else{
            return state
        }



    }
    const [state,dispatch]=useReducer(reducerfunction,{
        counter:0,
        text:""
    });

    // dispatch trigger the reducer function
    // console.log(state)
  return (
   <>
   
   <h2> Use REducer</h2>
   {/* <p>{data}</p>
   <button onClick={()=>setData(data+1)}>increase </button>
   <button onClick={()=>setData(data-1)}>decrease </button>

   <input type='text'  onChange={(e)=>setText(e.target.value)}></input>

<h3>{text}</h3> */}

<button onClick={()=>dispatch({type:"INC"})}>increase </button>
<p>{state.counter}</p>
   <button onClick={()=>dispatch({type:"DEC"})}>decrease </button>

<input type='text'  onChange={(e)=>dispatch({type:"INPUT",payload:e.target.value})}></input>

<h3>{state.text}</h3>
   </>
  )
}
