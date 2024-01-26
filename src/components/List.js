import React from "react";

function List(){
    const humans = [  {
            id: 1,
            name: 'Bruce',
            age: '30',
            skill: 'React'
        },
    {
        id: 2,
        name: 'Clark',
        age: '25',
        skill: 'Angular'
    },
    {
        id: 3,
        name: 'Preye',
        age: '15',
        skill: 'Vue'
    }]
    const humansList =  humans.map(human => <human human={human} />)

    return(<div>{humansList}</div>)
}   
 
export default List