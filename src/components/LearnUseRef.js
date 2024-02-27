import { useRef, useState, useEffect } from "react";
import React from "react";

 export default function LearnUseRef (){
    const [name, setName] = useState("")
    const renderCount = useRef(0)

    useEffect(() => {
        renderCount.current = renderCount.current + 1
        })

    return(
        <>
            <h1>Input your Name</h1>

            <input value={name} onChange={e => setName(e.target.value) } />

            <p>my name is {name}</p>

            I rendered {renderCount} times
        </>
    )
}