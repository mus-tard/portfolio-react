import React from 'react';
import HamIcon from '../icons/HamIcon'
import {
    container,
} from './hamButton.module.css'


function HamButton( {isOpen, handleClick} ) {




    return (
        <button className={container} onClick={handleClick} aria-label="Mobile navigation">

            <HamIcon
                width="60px"
                isOpen={isOpen}
            />

            
        </button>
    )
}

export default HamButton