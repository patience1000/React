import React from "react";
import Human from "./Human"



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
    // const humansList = humans.map (human => <Human key={human.name} human={human}/>)

    const Lists = humans.map(humans => {
        return{
            content: `${humans.name} - ${humans.skill}`,
            skill: humans.skill
    }
    })

    function List(){
    console.log(Lists)
    }
    // return(<div>{humansList}</div>)
  


 
export default List
