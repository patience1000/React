import React from "react";

function List(){
  
    const names = ['Ada','Obinna','chizoba']
//    const map1 = names.map(x => x*2)
    return(
        <div>
            <h3>{names[0]}</h3>
            <h3>{names[1]}</h3>
            <h3>{names[2]}</h3>
            <h3>{names[3]}</h3>
        </div>
    )
    
}

export default List