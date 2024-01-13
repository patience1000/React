import React from "react";

const Navbar = props => {
    const {name, heroName} = props

    return(
            <h1> Hello  {name} is a {heroName}</h1>
    ) 
}
export default Navbar
