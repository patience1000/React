import React from "react";

function List(){
  
    const names = ['Ada','Obinna','chizoba']

    return(
        <div>
            {
                names.map(name => <h2>{name}</h2>)
            }
        </div>
    )
    
}

export default List