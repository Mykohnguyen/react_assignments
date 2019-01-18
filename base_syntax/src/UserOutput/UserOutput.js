import React from 'react';
import './UserOutput.css';

const useroutput = props => (
    <div className="UserOutput">
        <p>Hello my name is {props.name} </p>
        <p> I am from {props.location}</p>
    </div>
    );

export default useroutput;
