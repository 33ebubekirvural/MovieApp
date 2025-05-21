import React from 'react';

import { TiHome } from 'react-icons/ti';
import { FaHeart } from 'react-icons/fa';
import { PiFilmReelFill } from 'react-icons/pi';

import './Navbar.css';



const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="left">
                <h1>Movie App</h1>
            </div>
            <div className="center">
                <PiFilmReelFill />
            </div>
            <div className="right">
                <ul>
                    <li>
                        <TiHome />
                    </li>
                    <li>
                        <FaHeart />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar