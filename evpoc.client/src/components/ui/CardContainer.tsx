
import React, { useState } from 'react';
import Card from './Card';
import DCCharger from '../../modules/DCCharger/DCCharger.tsx';
import './CardContainer.css';


import { FaMapMarkedAlt } from "react-icons/fa";
import { FaChargingStation } from "react-icons/fa";
import { MdOutlineEventAvailable } from "react-icons/md";
import { MdOtherHouses } from "react-icons/md";

const CardContainer: React.FC = () => {
    const [showDCCharger, setShowDCCharger] = useState(false);

    const handleCardClick = () => {
       /* console.log('Card 1 clicked');*/
        setShowDCCharger(true); // Set state to show DCCharger output
    };

    const cards = [
        { title: <FaMapMarkedAlt />, description: 'My Vehical', onClick: handleCardClick },
        { title: <FaChargingStation />, description: 'Orders' },
        { title: <MdOutlineEventAvailable />, description: 'Maps' },
        { title: <MdOtherHouses />, description: 'FAQ' },
    ];

    return (
        <div className="card-container">
            {cards.map((card, index) => (
                <Card key={index} title={card.title} description={card.description} onClick={card.onClick} />
            ))}
            {showDCCharger && <DCCharger />}
        </div>
        
    );
};

export default CardContainer;
