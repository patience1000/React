import { useRef, useState } from "react";
import React from "react";

 export default function LearnUseRef (){
    const [name, setName] = useState("")


    return(
        <div>
            <h1>Input your Name</h1>
            
            <input value={name} onChange={e => setName(e.target.value) } />

            <p>my name is {name}</p>
        </div>
    )
}