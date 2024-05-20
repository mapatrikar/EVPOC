import React from 'react';
import './Card.css';

interface CardProps {
    title: React.ReactNode; // Accepts React elements or strings
    description: string;
    onClick?: () => void; // Optional click handler
}

const Card: React.FC<CardProps> = ({ title, description, onClick }) => {
    return (
        <div className="card" onClick={onClick}>
            <div className="card-title">{title}</div>
            <p className="card-description">{description}</p>
        </div>
    );
};

export default Card;
