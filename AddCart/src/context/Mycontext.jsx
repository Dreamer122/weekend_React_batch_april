import { createContext ,useState} from "react";

export const Mycontext=createContext();

export const ProviderFunction=({children})=>{
    const [CartData,setCartData]=useState([])

    // addcart function
    const addcart=(prd)=>{
    CartData.length>0?CartData.forEach((obj)=>{
    if( obj.id==prd.id){
      alert("product already added to cart")
    }
    else{

      setCartData([...CartData,prd])
    }
  }):setCartData([...CartData,prd])
  }
// increase or dec qty

  const inc=(prd)=>{
    console.log("inc",prd)
  const newdata= CartData.map((obj)=>{
    if( obj.id==prd.id){
      obj.qty+=1
      return {...obj}
    }
    else{
      return obj
    }
  })

     setCartData([...newdata])
  }

//   dec function

const dec=(prd)=>{
    console.log("inc",prd)
  const newdata= CartData.map((obj)=>{
    if( obj.id==prd.id){
      if(obj.qty>1){

        obj.qty-=1
        return {...obj}
      }
      else{
        return obj
      }
    }
    else{
      return obj
    }
  })

     setCartData([...newdata])
  }

  // remove prd
  const remove=(id)=>{
    const newdata=CartData.filter((obj)=>obj.id!=id)
    setCartData([...newdata])

  }

  return <Mycontext.Provider value={{CartData,inc,dec,remove,addcart}}>
{children}
{/* app */}
  </Mycontext.Provider>


}
