import React from 'react';

const Summary = (props) => {
    const {name} = props.player
    
 
    return (
        <div>
            <ul>
                <li style={{listStyleType: "square"}}>{name}</li>
            </ul>
        </div>
    );
};

export default Summary;