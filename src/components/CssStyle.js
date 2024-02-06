import React from "react";

function CssStyle(){
    const name = "John"
    const isNameShowing = false;
    return(
        <div>
            <h2> Hello {isNameShowing ? name: "someone"}</h2>
        </div>
    )
}
export default CssStyle
