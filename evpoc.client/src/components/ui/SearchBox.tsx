import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Importing magnifying glass icon from react-icons
import './SearchBox.css';

const SearchBox: React.FC = () => {
    const [vehicleNumber, setVehicleNumber] = useState('');

    const handleSearch = () => {
        console.log('Searching for:', vehicleNumber);
        // Add your search logic here
    };

    return (
        <div className="search-box">
            <input
                type="text"
                placeholder="Enter vehicle number"
                value={vehicleNumber}
                onChange={(e) => setVehicleNumber(e.target.value)}
            />
            <button onClick={handleSearch}>
                <FaSearch />
            </button>
        </div>
    );
};

export default SearchBox;
