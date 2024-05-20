
import React, { useState } from 'react';

///*import Card from './components/ui/Card';*/

/*import Feature from './modules/Other/Feature.tsx';*/
import SearchBox from './components/ui/SearchBox';
import './components/ui/Menubar.css';
import { VscAccount } from "react-icons/vsc";
//import Preferences from './components/ui/Card';
//import FAQ from './components/ui/CardContainer';
import Reservation from './modules/Reservation/Reservation.tsx';
import { FcAbout } from "react-icons/fc";
import Home from './Home.tsx';
import { RiAdminFill } from "react-icons/ri";
import { MdSupervisedUserCircle } from "react-icons/md";



const App: React.FC = () => {
    const [selectedMenu, setSelectedMenu] = useState<string>('home');

    const handleMenuClick = (menu: string) => {
        setSelectedMenu(menu);
    };


    return (
        <div  >
           
            {/*<div className="hamburger" onClick={toggleMenu}>*/}
            {/*    &#9776;*/}
            {/*</div>*/}
            <nav >
                <ul className="menubar">
                    <h1 onClick={() => handleMenuClick('Home')}  className="logo"><img src="./src/assets/logo.png" height="50px"></img></h1>
                    <SearchBox />
                 
                    <li onClick={() => handleMenuClick('Reservation')}>Reservation</li>
                    <li onClick={() => handleMenuClick('DCCharging')}>DC Fast Charging <FcAbout /></li>
                    <li onClick={() => handleMenuClick('Predective')}>Availability</li>

                    {/*<li onClick={() => handleMenuClick('Features')}>Additional Features</li>*/}
                    {/*<li onClick={() => handleMenuClick('Preferences')}>User Preferences</li>*/}
                    {/*<li onClick={() => handleMenuClick('FAQ')}>FAQ</li>*/}
                    <li><button>Book Now</button></li>  
                    
                    <h2><RiAdminFill /></h2>Admin
                    <h2><VscAccount /></h2>  User
                    <h2><MdSupervisedUserCircle /></h2>Super User

             
                </ul>
            </nav>
            {selectedMenu === 'Home' && <Home />}
            {/*{selectedMenu === 'Orders' && <Orders />}*/}
            {/*{selectedMenu === 'Vehicale' && <Vehicale />}*/}
            {/*{selectedMenu === 'Maps' && <Maps />}*/}
            {selectedMenu === 'Reservation' && <Reservation />}
            {/*{selectedMenu === 'Preferences' && <Preferences/>}*/}
            {/*{selectedMenu === 'FAQ' && <FAQ/>}*/}
        
         </div>
    );
};

export default App;
