import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

export const Home = () => {
	const url = 'https://youtube-data8.p.rapidapi.com/auto-complete/?q=cartoon&hl=en&gl=US';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '221a169e29msh3263d9eb3ab50e5p137ef9jsna217e6a58a33',
		'x-rapidapi-host': 'youtube-data8.p.rapidapi.com'
	}
};
	
	const callApi= async()=>{

	try {
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}

	useEffect(()=>{
		callApi()
	},[])
  return (
    <div>
      <h1>Home page</h1>
  <div style={{textAlign:"center"}}>
 <Link to={"/login"}> <button style={{height:"40px",width:"150px",}}>login</button></Link>
  </div>

{/* <footer>
	<p>Font family is Raleway from <a href="https://fonts.google.com/specimen/Raleway" target="_blank">Google Fonts</a>.</p>
</footer> */}


    </div>
  )
}
