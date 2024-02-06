import React from "react";

function CssStyle(){
    const name = "John"
    const isNameShowing = false;
    return(
        <div>
            {isNameShowing ? (
                <>
                    {name}
                </>
            ):(
                <h2>There is no name</h2>
            )}
        </div>
    )
}
export default CssStyle
