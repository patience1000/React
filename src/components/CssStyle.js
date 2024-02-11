import React from "react";
import { useState, useEffect } from "react";

// function CssStyle(){
//     const name = "John"
//     const isNameShowing = false;
//     return(
//         <div>
//             {isNameShowing ? (
//                 <>
//                     {name}
//                 </>
//             ):(
//                 <h2>There is no name</h2>
//             )}
//         </div>
       
//     )
// }
const CssStyle = () => {
    const [counter, setCounter] = useState(0);

    useEffect (() => {
        alert('You changed counter to the number to'+ counter);      
    },[counter]);

    return(
        <div className="App">
        <button onClick={() => setCounter((prevCount) => prevCount-1)}>-</button>
        <h1>{counter}</h1>
        <button onClick={() => setCounter ((prevCount) => prevCount+1)}>+</button>
        </div>
        
    );
    }
export default CssStyle
