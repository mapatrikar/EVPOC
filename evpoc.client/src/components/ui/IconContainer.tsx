import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBatteryFull, faCar, faChargingStation, faGasPump, faMapMarkerAlt, faTools, faUser, faInfoCircle, faQuestionCircle, faCogs } from '@fortawesome/free-solid-svg-icons';
import './IconContainer.css';

const IconContainer: React.FC = () => {
    return (
        <div className="icon-container">
            <div className="icon-row">
                <FontAwesomeIcon icon={faBatteryFull} className="icon" />
                <FontAwesomeIcon icon={faCar} className="icon" />
                <FontAwesomeIcon icon={faChargingStation} className="icon" />
                <FontAwesomeIcon icon={faGasPump} className="icon" />
                <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
            </div>
            <div className="icon-row">
                <FontAwesomeIcon icon={faTools} className="icon" />
                <FontAwesomeIcon icon={faUser} className="icon" />
                <FontAwesomeIcon icon={faInfoCircle} className="icon" />
                <FontAwesomeIcon icon={faQuestionCircle} className="icon" />
                <FontAwesomeIcon icon={faCogs} className="icon" />
            </div>
        </div>
    );
};

export default IconContainer;
