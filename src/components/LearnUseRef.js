import { useRef, useState, useEffect } from "react";
import React from "react";

 export default function LearnUseRef (){
    const [name, setName] = useState("")
    const prevName = useRef()


    useEffect(() =>{
        prevName.current = name 
    },[name])
    

    // function focus(){
    //     inputRef.current.focus()

    //     inputRef.current.value = 'some value'
    // }

    return(
        <>
            <h1>Input your Name</h1>

            <input value={name} onChange={e => setName(e.target.value) } />

            <p>my name is {name} it used to be {prevName.current}</p>

            <button onClick={focus}>Focus</button>
        </>
    )
}