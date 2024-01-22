import React from "react";
import List from "./List";

function Person(){
    return(
        <div>
            <h2>
            {person.id}. I am {person.name}, I am {person.age} years old and I am a {person.skill} expert. 
            </h2>
        </div>
    )
}
export default Person