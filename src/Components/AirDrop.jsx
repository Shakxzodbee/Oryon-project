import React from 'react';
import AirDropimg from '../assets/img/AirDropimg.png';
import '../assets/css/AirDrop.css';
import ComingSoonButton from './ComingSoonButton'; // oldin yaratgan komponent

const AirDrop = () => {
    return (
        <div className='total-div'>
            <h3>The AirDrop Company</h3>
            <p>
                Early contributors and supporters will be <br /> 
                eligible for the GENESIS AIRDROP.
            </p>
            <img src={AirDropimg} alt="AirDrop" />
            
            {/* Markazga joylashgan Coming Soon knopka */}
            <div className="button-wrapper">
                <ComingSoonButton />
            </div>
        </div>
    );
};

export default AirDrop;
