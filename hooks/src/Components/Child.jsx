import React from 'react'
import { memo } from 'react'

export const Child =memo( ({x,check}) => {
    console.log("child rendered")
  return (
    <div>Child
        {/* <h3>{x}</h3> */}
        <button onClick={()=>check(x)}>check function</button>
    </div>
  )
}
)
