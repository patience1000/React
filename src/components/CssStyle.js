import React from "react";
import { useState } from "react";

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
    return(
        <div className="App">
        <button onClick={() => setCounter((prevCount) => prevCount-1)}>-</button>
        <h1>{counter}</h1>
        <button onClick={() => setCounter}>+</button>
        </div>
        
    )
}
export default CssStyle
