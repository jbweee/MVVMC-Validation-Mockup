import React from 'react';

const Person = ({ person }) => (
    <div>
        {/* first row */}
        <div style=
            {{
                'display': 'flex',   
                'justifyContent': 'space-evenly'
            }}
        >
            <div style={{'display': 'block'}}>
                {person.firstName} {person.middleInitial} {person.lastName}
            </div>
            {/* <div style={{'display': 'block'}}>
                {person.lastName}
            </div>
            <div style={{'display': 'block'}}>
                {person.middleInitial}
            </div> */}
        </div>
        {/* second row */}
        <div style=
            {{
                'display': 'flex',   
                'justifyContent': 'space-evenly'
            }}
        >
            <div style={{'display': 'block'}}>
                Email: {person.email}
            </div>
            <div style={{'display': 'block'}}>
                Age: {person.age}
            </div>
        </div>
        {/* third row */}
        <div style=
            {{
                'display': 'flex',   
                'justifyContent': 'space-evenly'
            }}
        >
            <div style={{'display': 'block'}}>
                {person.address}, {person.city}, {person.state} {person.zip}
            </div>
        </div>
        <br/>
        <br/>
    </div>
)

export default Person;