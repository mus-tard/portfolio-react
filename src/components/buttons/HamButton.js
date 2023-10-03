import React from 'react';
import HamIcon from '../icons/HamIcon'
import {
    container,
} from './hamButton.module.css'


function HamButton( {isOpen, handleClick} ) {




    return (
        <button className={container} onClick={handleClick}>

            <HamIcon
                width="60px"
                isOpen={isOpen}
            />

            
        </button>
    )
}

export default HamButton