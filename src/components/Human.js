import React from "react";
function Human({human}){
    return(
        <div>
            <h2>
            I am {human.name}. I am {human.age} years old in love with {human.skill} 
            </h2>
        </div>
    )
}
export default Human 