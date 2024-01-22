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
    const personList = persons.map(person => <h2>I am {person.name}, I am {person.age} years old and I am a {person.skill} expert</h2>)
    return(
        <div>
            { personList}
        </div>
    )
    
}

export default List