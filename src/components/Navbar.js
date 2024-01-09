import React from "react";

function Navbar(prop){
    console.log(prop)
    return(
            <h1> Hello  {prop.name} is a {prop.heroName}</h1>
    ) 
}
export default Navbar