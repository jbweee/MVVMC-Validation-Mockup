import React from 'react';
import Person from './Person.jsx';

const People = (props) => (
    <div>
        {props.people.map( (person)=> {
            return (
                <Person person={person} key={person.lastName}></Person>
            )
        })}
    </div>
)

export default People;