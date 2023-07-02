import React from 'react';

const ToyCard = ({toy}) => {
    const{name} = toy;
    console.log(toy)
    return (
        <div>
            {name}
        </div>
    );
};

export default ToyCard;