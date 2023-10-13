import React from 'react'
import Tile from '../elements/Tile'
import {
    tileGrid,
    container,
    tileContainer
} from './portfolioTiles.module.css'

function PortfolioTiles() {
    return(
        <div className={container}>
            <h2>
                Case Studies
            </h2>
            <div className={tileGrid}>
                <div className={tileContainer}>
                    <Tile />
                </div>
                <div className={tileContainer}>
                    <Tile />
                </div>

               

                
            </div>
        </div>
    )
}

export default PortfolioTiles