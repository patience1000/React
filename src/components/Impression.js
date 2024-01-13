import React from "react";

function Impression(){
    function clickHandler(){
        console.log('Hello world')
    }

    return(
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}
export default Impression