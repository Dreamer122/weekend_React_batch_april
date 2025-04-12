function Card({name,category,image}){
    // console.log(props)
    // const {name,category}=props

    return (

        <div>
            <img src={image} alt=""  style={{height:"200px"}}/>
            <p>{name}</p>
            <p>{category}</p>
        </div>
    )
}

export default Card