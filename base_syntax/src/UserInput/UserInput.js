import React from 'react';

const userinput = props => (
    <div className="UserInput">
        <input type="text" onChange={props.changed} value={props.children} />
    </div>
    );

export default userinput;
