import React from 'react';
import ToyCard from './ToyCard';

const ToyTab = ({toys}) => {
    return (
        <div>
            {
                toys.map((toy)=>(
                    <ToyCard key={toy._id} toy={toy}></ToyCard>
                ))
            }
        </div>
    );
};

export default ToyTab;