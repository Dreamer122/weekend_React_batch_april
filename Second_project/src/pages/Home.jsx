import React from 'react'
import { Link } from 'react-router'

export const Home = () => {
  return (
    <div>
        <main className="center-content">
	<h1>
		Doel Javid is:
		<div className="h1-scroll-div">
			<div className="h1-scroll-content">
				<div aria-label="a programmer,">a Programmer</div>
				<div aria-label="an artist,">an Artist</div>
				<div aria-label="a designer.">a Designer</div>
				<div aria-hidden="true">a Baker</div>
				<div aria-hidden="true">a Programmer</div>
			</div>
		</div>
	</h1>
</main>
  <div style={{textAlign:"center"}}>
 <Link to={"/login"}> <button style={{height:"40px",width:"150px",}}>login</button></Link>
  </div>

{/* <footer>
	<p>Font family is Raleway from <a href="https://fonts.google.com/specimen/Raleway" target="_blank">Google Fonts</a>.</p>
</footer> */}


    </div>
  )
}
