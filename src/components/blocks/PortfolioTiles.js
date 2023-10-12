import React from 'react'
import Tile from '../elements/Tile'
import {
    tileGrid,
    container
} from './portfolioTiles.module.css'

function PortfolioTiles() {
    return(
        <div className={container}>
            <h2>
                Case Studies
            </h2>
            <div className={tileGrid}>
                <Tile />
                <Tile />
                <Tile />
            </div>
        </div>
    )
}

export default PortfolioTiles