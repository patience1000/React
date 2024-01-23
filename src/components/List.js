import React from "react";

function List(){
  
    const persons = [
        {
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
    }
]
    const personList = persons.map(Person => <Person key={Person.id} person={person} />)
    return(
        <div>
            {personList}
        </div>
    )
    
}

export default List