export function Header(){
  
    const Name="Myapp"
    const a=10
    const b=20
    
      return(
        //  react fragment
        <>
       
          {/* <h1>{Name}</h1> */}
          <nav className="list">
            <ul>
              <li>HOme</li>
              <li>about</li>
              <li>contact</li>
            </ul>
          </nav>
        <h3>
          jsx - javascript xml
          {
            a+b
          }
        </h3>
        </>
      )
    
    }