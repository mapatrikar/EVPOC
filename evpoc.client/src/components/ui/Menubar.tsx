import React, { useState } from 'react';
import './Menubar.css';
import { VscAccount } from "react-icons/vsc";
import SearchBox from './SearchBox';
import { FcAbout } from "react-icons/fc";


const Menubar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="menubar">
            <h1 className="logo"><img src="./src/assets/logo.png" height="50px"></img></h1>
            <SearchBox />
            <div className="hamburger" onClick={toggleMenu}>
                &#9776; 
            </div>
            <ul className={`menu ${menuOpen ? 'show' : ''}`}>
                <li><button>Booking</button></li>
                <li><a href="#">Reservation</a></li>
                <li><a href="#">DC Fast Charging  <FcAbout /></a></li>
               
                <li><a href="#">Predective availability</a></li>
               
                <h2><VscAccount /></h2>              
               
            </ul>
        </div>

    );
};

export default Menubar;
