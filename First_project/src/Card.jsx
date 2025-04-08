function Card({name,category}){
    // console.log(props)
    // const {name,category}=props

    return (

        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s" alt="" />
            <p>{name}</p>
            <p>{category}</p>
        </div>
    )
}

export default Card