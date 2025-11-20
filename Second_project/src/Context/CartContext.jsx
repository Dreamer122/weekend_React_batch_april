import { createContext, useState } from "react";

import toast from "react-hot-toast";
export const CartContext =createContext()

export const CartProvider=({children})=>{
    const [cart,setCart]=useState([])
    const addCart=(prd)=>{
        const ispresent=cart.find((item)=>item.id==prd.id)
        if(ispresent){
            toast.error("already added to cart")
        }
        else{

            setCart([...cart,{...prd,qty:1}])
           toast.success("prd added to cart")
        }

    }

    // quantity increase and decrease 
    const quantity=(prd,v)=>{
        const newarray=cart.map((item)=>{
            if(prd.id==item.id){
                if(prd.qty==1 && v==-1){

                    prd.qty=1
                }
                else{
                     prd.qty=prd.qty+(v)
                }
                return prd
                
            }
            else{
                return item
            }
        })
        setCart([...newarray])
    }


    return (
        <CartContext.Provider  value={{cart,addCart,quantity}}>
            {children}
        </CartContext.Provider>
    )

}

/*
* <card text={"hello"}/>
<card>
hello
</card>
*/