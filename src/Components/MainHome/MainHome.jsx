import React from 'react';
import Banner from './Banner/Banner';
import OurTeam from './OurTeam/OurTeam';
import About from './About/About';
import ToysSample from './ToysSample/ToysSample';

const MainHome = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <ToysSample></ToysSample>
            <OurTeam></OurTeam>

        </div>
    );
};

export default MainHome;