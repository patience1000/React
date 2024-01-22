import React from "react";


function Person({person}){
    return(
        <div>
            <h2>
             I am {person.name}, I am {person.age} years old and I am a {person.skill} expert. 
            </h2>
        </div>
    )
}
export default Person