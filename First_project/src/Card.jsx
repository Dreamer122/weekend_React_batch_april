function Card({category,image,title,price}){
    // console.log(props)
    // const {name,category}=props

    return (

        <div className="prd-card">
            <img src={image} alt=""  style={{height:"200px",width:"100%"}}/>
            <p>{title}</p>
            <p>{category}</p>
           <p> {price}</p>
        </div>
    )
}

export default Card