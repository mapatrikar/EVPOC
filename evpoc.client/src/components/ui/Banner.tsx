import React from 'react';
import './Banner.css';

interface BannerProps {
    chargerName: string;
    kms: number;
    batteryStatus: string;
}

const Banner: React.FC<BannerProps> = ({ chargerName, kms, batteryStatus }) => {
    return (
        <div className="banner">
          <img src="./src/assets/banner.jpg" width="100%"></img>
            <h1 className="charger-name">{chargerName}</h1>
            <div className="circle">
                <span className="kms">{kms} km</span>
            </div>
            <div className="battery-status">
                <span>{batteryStatus}</span>
            </div>
        </div>
    );
};

export default Banner;
