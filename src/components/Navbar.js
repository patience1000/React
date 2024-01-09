import React from "react";

function Navbar(prop){
    console.log(prop)
    return(
        <div>
            <h1> Hello  {prop.name} is a {prop.heroName}</h1>
            {prop.children}
        </div>
        
    ) 
}
export default Navbar